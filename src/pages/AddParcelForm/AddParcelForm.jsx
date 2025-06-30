import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import warehouses from "../../data/warehouses.json"; // Make sure this path is correct


const AddParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

  const parcelType = watch("parcelType");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");
  const senderWarehouse = watch("senderWarehouse");
  const receiverWarehouse = watch("receiverWarehouse");
  const weight = parseFloat(watch("weight")) || 0;

  const [regionList, setRegionList] = useState([]);
  const [senderCenters, setSenderCenters] = useState([]);
  const [receiverCenters, setReceiverCenters] = useState([]);

  // Extract unique regions
  useEffect(() => {
    const uniqueRegions = [
      ...new Set(warehouses.map((w) => w.region)),
    ];
    setRegionList(uniqueRegions);
  }, []);

  useEffect(() => {
    if (senderRegion) {
      setSenderCenters(
        warehouses.filter((w) => w.region === senderRegion)
      );
    }
  }, [senderRegion]);

  useEffect(() => {
    if (receiverRegion) {
      setReceiverCenters(
        warehouses.filter((w) => w.region === receiverRegion)
      );
    }
  }, [receiverRegion]);

  const onSubmit = async (data) => {
    const isWithinCity = data.senderWarehouse === data.receiverWarehouse;

    let totalCost = 0;
    let costBreakdown = "";

    if (data.parcelType === "document") {
      totalCost = isWithinCity ? 60 : 80;
      costBreakdown = `Document, ${isWithinCity ? "Within" : "Outside"} City: ৳${totalCost}`;
    } else {
      if (!weight || weight <= 0) {
        return Swal.fire({
          icon: "warning",
          title: "Invalid Weight",
          text: "Weight must be positive",
        });
      }

      if (weight <= 3) {
        totalCost = isWithinCity ? 110 : 150;
      } else {
        const extra = (weight - 3) * 40;
        totalCost = isWithinCity ? 110 + extra : 150 + extra + 40;
      }

      costBreakdown = `Non-Document ${weight}kg, ${isWithinCity ? "Within" : "Outside"} City: ৳${totalCost}`;
    }

    const confirm = await Swal.fire({
      title: `Cost: ৳${totalCost}`,
      html: `<p>${costBreakdown}</p>`,
      showCancelButton: true,
      confirmButtonText: "Confirm",
    });

    if (!confirm.isConfirmed) return;

  const parcelData = {
  ...data,
  weight: data.parcelType === "document" ? 0 : weight,
  deliveryCost: totalCost,
  creation_date: new Date().toISOString(),
  status: "Unpaid", // default status for payment tracking
};


    try {
      const res = await axios.post("http://localhost:3000/addParcel", parcelData);
      Swal.fire("Success!", `Tracking ID: ${res.data.insertedId}`, "success");
    } catch (err) {
      Swal.fire("Error", "Failed to save parcel.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-green-800">Add Parcel</h2>

      <div className="flex gap-6">
        <label className="flex gap-2 items-center">
          <input type="radio" value="document" {...register("parcelType")} defaultChecked />
          Document
        </label>
        <label className="flex gap-2 items-center">
          <input type="radio" value="non-document" {...register("parcelType")} />
          Non-Document
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input className="input" placeholder="Parcel Title" {...register("parcelName", { required: true })} />

        {parcelType === "non-document" && (
          <input
            type="number"
            className="input"
            placeholder="Weight (kg)"
            {...register("weight", { required: true, min: 0.1 })}
          />
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-700">Sender Info</h4>
          <input className="input" placeholder="Name" {...register("senderName", { required: true })} />
          <input className="input" placeholder="Contact" {...register("senderContact", { required: true })} />
          <select className="input" {...register("senderRegion", { required: true })}>
            <option value="">Select Region</option>
            {regionList.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <select className="input" {...register("senderWarehouse", { required: true })}>
            <option value="">Select Service Center</option>
            {senderCenters.map((w) => (
              <option key={w.city} value={w.city}>{w.city}</option>
            ))}
          </select>
          <input className="input" placeholder="Address" {...register("senderAddress", { required: true })} />
          <textarea className="input" placeholder="Pickup Instruction" {...register("pickupInstruction")} />
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-700">Receiver Info</h4>
          <input className="input" placeholder="Name" {...register("receiverName", { required: true })} />
          <input className="input" placeholder="Contact" {...register("receiverContact", { required: true })} />
          <select className="input" {...register("receiverRegion", { required: true })}>
            <option value="">Select Region</option>
            {regionList.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <select className="input" {...register("receiverWarehouse", { required: true })}>
            <option value="">Select Service Center</option>
            {receiverCenters.map((w) => (
              <option key={w.city} value={w.city}>{w.city}</option>
            ))}
          </select>
          <input className="input" placeholder="Address" {...register("receiverAddress", { required: true })} />
          <textarea className="input" placeholder="Delivery Instruction" {...register("deliveryInstruction")} />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-xl text-lg shadow-md transition"
        >
          Confirm Booking
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
        }
        .input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
          outline: none;
        }
      `}</style>
    </form>
  );
};

export default AddParcelForm;