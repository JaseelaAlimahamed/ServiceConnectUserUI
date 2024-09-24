// import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center p-4 mt-2 justify-center">
      <div className="flex gap-2 border-4 bg-white border-dark-gray border-solid rounded-3xl">
        <button
          className={`px-6 py-1 rounded-full ${
            filter === "nearby"
              ? "bg-dark-gray text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setFilter("nearby")}
        >
          Near By
        </button>
        <button
          className={`px-6 py-1 rounded-full ${
            filter === "10km"
              ? "bg-dark-gray text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setFilter("10km")}
        >
          10 KM
        </button>
        <button
          className={`px-6 py-1 rounded-full ${
            filter === "all"
              ? "bg-dark-gray text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
