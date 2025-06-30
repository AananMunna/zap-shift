import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaInfoCircle, FaTrash, FaMoneyBill, FaTimes } from "react-icons/fa";

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load your Stripe publishable key (replace with yours)
const stripePromise = loadStripe("pk_test_51ReL6ZGfjBeKFWvxOedUv4QirG7FSlNnjsX4y2lOqemt0UxlH0pj3T2fcjnwBEdDaJ7OvoTpvcmgHrZIbKNQ68Wd00DG5yAx2y");

// --- Payment Form Component ---
const CheckoutForm = ({ amount, parcelId, onClose, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      // Create payment intent on backend
      const { data } = await axios.post(
        "http://localhost:3000/create-payment-intent",
        { amount: amount * 100 } // convert to smallest unit
      );

      const cardElement = elements.getElement(CardElement);

      // Confirm payment on frontend
      const confirmResult = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: cardElement },
      });

      if (confirmResult.error) {
        setMessage(`Payment failed: ${confirmResult.error.message}`);
      } else if (confirmResult.paymentIntent.status === "succeeded") {
        setMessage("Payment succeeded! Thank you.");
          await onSuccess(parcelId); // ✅ Call the payment handler

        setTimeout(() => {
          onClose(); // close modal after success
        }, 1500);
      }
    } catch (error) {
      setMessage("Payment error. Try again.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              "::placeholder": { color: "#a0aec0" },
            },
            invalid: { color: "#fa755a" },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn btn-primary w-full"
      >
        {loading ? "Processing..." : `Pay ৳${amount}`}
      </button>
      {message && <div className="text-center mt-2">{message}</div>}
    </form>
  );
};

// --- Main Parcel Table Component ---
const ParcelTable = () => {
  const [parcels, setParcels] = useState([]);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);


  const handlePayment = async (parcelId) => {
  try {
    const res = await axios.put(`http://localhost:3000/parcels/${parcelId}/pay`);
    if (res.data.message === "Payment successful & status updated") {
      setParcels(prev => prev.filter(p => p._id !== parcelId)); // Remove from UI
      Swal.fire("Success!", "Payment completed & moved to MyPayments.", "success");
    }
  } catch (err) {
    console.error("❌ Payment update failed:", err);
    Swal.fire("Error", "Failed to update payment status", "error");
  }
};


  useEffect(() => {
    fetchParcels();
  }, []);

  const fetchParcels = async () => {
    try {
      const res = await axios.get("http://localhost:3000/unpaid-parcels");
      setParcels(res.data);
    } catch (error) {
      console.error("Failed to fetch parcels:", error);
    }
  };

  const openDetails = (parcel) => {
    setSelectedParcel(parcel);
    setShowDetailsModal(true);
  };

  const closeDetails = () => {
    setSelectedParcel(null);
    setShowDetailsModal(false);
  };

  const openPayment = (parcel) => {
    setSelectedParcel(parcel);
    setShowPaymentModal(true);
  };

  const closePayment = () => {
    setSelectedParcel(null);
    setShowPaymentModal(false);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axios.delete(`http://localhost:3000/parcels/${id}`);
      if (res.data?.message === "Parcel deleted successfully") {
        setParcels((prev) => prev.filter((parcel) => parcel._id !== id));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your parcel has been deleted.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to delete parcel. Please try again.",
      });
    }
  };

  return (
    <div className="overflow-x-auto w-full p-4">
      <div className="max-w-7xl mx-auto shadow-lg rounded-xl border border-base-300 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-lime-600 py-6 bg-base-100">
          📦 My Parcels
        </h2>

        <table className="table w-full text-sm md:text-base">
          <thead className="bg-lime-100 text-gray-700 text-center">
            <tr>
              <th>Tracking ID</th>
              <th>Title</th>
              <th>Type</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id} className="text-center hover:bg-base-100">
                <td className="font-mono text-xs">{`PCL-${parcel._id.slice(-6).toUpperCase()}`}</td>
                <td>{parcel.parcelName}</td>
                <td className="capitalize">{parcel.parcelType}</td>
                <td>
                  <div className="font-semibold">{parcel.senderName}</div>
                  <div className="text-xs text-gray-500">
                    {parcel.senderWarehouse}, {parcel.senderRegion}
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{parcel.receiverName}</div>
                  <div className="text-xs text-gray-500">
                    {parcel.receiverWarehouse}, {parcel.receiverRegion}
                  </div>
                </td>
                <td className="text-lime-600 font-semibold">
                  ৳{parcel.deliveryCost || "N/A"}
                </td>
                <td>
                  <span className="badge badge-warning badge-outline font-semibold">
                    {parcel.status || "Unpaid"}
                  </span>
                </td>
                <td className="flex items-center justify-center gap-2">
                  <button
                    className="btn btn-sm btn-circle btn-info text-white tooltip"
                    data-tip="Details"
                    onClick={() => openDetails(parcel)}
                  >
                    <FaInfoCircle />
                  </button>
                  <button
                    className="btn btn-sm btn-circle btn-error text-white tooltip"
                    data-tip="Delete"
                    onClick={() => handleDelete(parcel._id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="btn btn-sm btn-circle btn-success text-white tooltip"
                    data-tip="Pay"
                    onClick={() => openPayment(parcel)}
                  >
                    <FaMoneyBill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showDetailsModal && (
        <dialog open className="modal">
          <div className="modal-box max-w-2xl relative">
            <button
              onClick={closeDetails}
              className="btn btn-sm btn-circle btn-error absolute top-4 right-4"
            >
              <FaTimes />
            </button>
            <h3 className="font-bold text-lg text-lime-700 mb-4">
              📦 Parcel Details
            </h3>
            <div className="space-y-2 text-sm max-h-[60vh] overflow-y-auto">
              <p>
                <strong>Parcel Name:</strong> {selectedParcel.parcelName}
              </p>
              <p>
                <strong>Parcel Type:</strong> {selectedParcel.parcelType}
              </p>
              <p>
                <strong>Sender Name:</strong> {selectedParcel.senderName}
              </p>
              <p>
                <strong>Sender Warehouse:</strong>{" "}
                {selectedParcel.senderWarehouse}
              </p>
              <p>
                <strong>Sender Address:</strong> {selectedParcel.senderAddress}
              </p>
              <p>
                <strong>Receiver Name:</strong> {selectedParcel.receiverName}
              </p>
              <p>
                <strong>Receiver Warehouse:</strong>{" "}
                {selectedParcel.receiverWarehouse}
              </p>
              <p>
                <strong>Receiver Address:</strong> {selectedParcel.receiverAddress}
              </p>
              <p>
                <strong>Pickup Instruction:</strong>{" "}
                {selectedParcel.pickupInstruction}
              </p>
              <p>
                <strong>Delivery Instruction:</strong>{" "}
                {selectedParcel.deliveryInstruction}
              </p>
              <p>
                <strong>Weight:</strong> {selectedParcel.weight || "N/A"}
              </p>
            </div>
          </div>
        </dialog>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <dialog open className="modal">
          <div className="modal-box max-w-md relative">
            <button
              onClick={closePayment}
              className="btn btn-sm btn-circle btn-error absolute top-4 right-4"
            >
              <FaTimes />
            </button>
            <h3 className="font-bold text-lg text-lime-700 mb-4">
              💳 Pay for Parcel: ৳{selectedParcel.deliveryCost || "N/A"}
            </h3>
            <Elements stripe={stripePromise}>
  <CheckoutForm
    amount={selectedParcel.deliveryCost || 0}
    parcelId={selectedParcel._id}         // ✅ Pass the ID
    onClose={closePayment}
    onSuccess={handlePayment}             // ✅ Pass handler
  />
</Elements>

          </div>
        </dialog>
      )}
    </div>
  );
};

export default ParcelTable;
