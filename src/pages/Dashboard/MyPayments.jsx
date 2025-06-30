import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const MyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaidParcels = async () => {
      try {
        const res = await axios.get("http://localhost:3000/payments");
        setPayments(res.data);
      } catch (error) {
        console.error("❌ Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaidParcels();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        💰 My Payments
      </h2>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      ) : payments.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No payments found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {payments.map((parcel) => (
            <div
              key={parcel._id}
              className="bg-white border rounded-lg shadow-md p-5 relative hover:shadow-lg transition"
            >
              <div className="absolute top-4 right-4 text-green-600 text-xl">
                <FaCheckCircle />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {parcel.parcelName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {parcel.parcelType}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Sender:</strong> {parcel.senderName} ({parcel.senderRegion})
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Receiver:</strong> {parcel.receiverName} ({parcel.receiverRegion})
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Cost:</strong>{" "}
                <span className="text-lime-600 font-bold">৳{parcel.deliveryCost}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Paid on:</strong>{" "}
                {new Date(parcel.creation_date).toLocaleDateString("en-GB")}
              </p>
              <span className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                ✅ Paid
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPayments;
