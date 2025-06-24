import { useState } from "react";

const CoverageSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 mb-4">
      <input
        type="text"
        placeholder="Search by district, city, or area"
        value={query}
        onChange={handleChange}
        className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  );
};

export default CoverageSearch;