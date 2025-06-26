import { FaInfoCircle, FaTrash, FaMoneyBill } from "react-icons/fa";

const ParcelTable = () => {
  const parcels = [
    {
      id: "PCL-20250625-IBX0N",
      title: "Ea laborum Rerum do",
      type: "Non-Document",
      sender: { name: "Barclay Humphrey", location: "Sylhet, Sunamganj" },
      receiver: { name: "Sarah Reeves", location: "Barisal, Patuakhali" },
      cost: 2830,
      status: "Unpaid",
    },
    {
      id: "PCL-20250625-6L8Y0",
      title: "Voluptatum voluptate",
      type: "Non-Document",
      sender: { name: "Tamara Cooke", location: "Rajshahi, Bogura" },
      receiver: { name: "Forrest Bridges", location: "Rangpur, Nilphamari" },
      cost: 2670,
      status: "Unpaid",
    },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <div className="max-w-7xl mx-auto shadow-lg rounded-xl border border-base-300 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-lime-600 py-6 bg-base-100">
          📦 My Parcels
        </h2>

        <table className="table w-full text-sm md:text-base">
          <thead className="bg-lime-100 text-gray-700 text-center">
            <tr>
              <th className="py-4 px-2">Tracking ID</th>
              <th className="py-4 px-2">Title</th>
              <th className="py-4 px-2">Type</th>
              <th className="py-4 px-2">Sender</th>
              <th className="py-4 px-2">Receiver</th>
              <th className="py-4 px-2">Cost</th>
              <th className="py-4 px-2">Status</th>
              <th className="py-4 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={index} className="text-center hover:bg-base-100">
                <td className="px-2 py-4 font-mono text-xs md:text-sm text-gray-600">
                  {parcel.id}
                </td>
                <td className="px-2 py-4 font-medium">{parcel.title}</td>
                <td className="px-2 py-4">{parcel.type}</td>
                <td className="px-2 py-4">
                  <div className="font-semibold text-gray-800">
                    {parcel.sender.name}
                  </div>
                  <div className="text-xs text-gray-500">{parcel.sender.location}</div>
                </td>
                <td className="px-2 py-4">
                  <div className="font-semibold text-gray-800">
                    {parcel.receiver.name}
                  </div>
                  <div className="text-xs text-gray-500">{parcel.receiver.location}</div>
                </td>
                <td className="px-2 py-4 text-lime-600 font-semibold">
                  ৳{parcel.cost}
                </td>
                <td className="px-2 py-4">
                  <span className="badge badge-warning badge-outline font-semibold">
                    {parcel.status}
                  </span>
                </td>
                <td className="px-2 py-4 flex items-center justify-center gap-2">
                  <button className="btn btn-sm btn-circle btn-info text-white tooltip" data-tip="Details">
                    <FaInfoCircle />
                  </button>
                  <button className="btn btn-sm btn-circle btn-error text-white tooltip" data-tip="Delete">
                    <FaTrash />
                  </button>
                  <button className="btn btn-sm btn-circle btn-success text-white tooltip" data-tip="Pay">
                    <FaMoneyBill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParcelTable;
