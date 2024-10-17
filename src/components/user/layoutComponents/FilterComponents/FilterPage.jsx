import React, { useEffect, useState } from "react";
import FilterList from "./FilterList";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const FilterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentFilterOptions } = location.state;
  console.log(currentFilterOptions)
  const [selectedFilters, setSelectedFilters] = useState({});

  console.log(selectedFilters);

  const handleApplyFilters = () => {
    navigate("/", { state: { filtersApplied: selectedFilters } });   //route need to be updated later
  };
const handleClearFilters =()=>{
  setSelectedFilters({});

}



  return (
    <div className="min-h-screen flex flex-col items-center bg-light-gray">
      <div className="w-full max-w-lg bg-primary shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="flex items-center">
            <BiArrowBack className="mr-2 text-2xl font-bold" onClick={() => navigate(-1)} aria-label="Go back" />
            <span className="text-2xl font-semibold">Filter</span>
          </div>
          <div>
            <button className="text-lg underline text-medium-gray bg-primary " onClick={handleClearFilters}>Clear</button>
          </div>
        </div>
        <FilterList
          currentFilterOptions={currentFilterOptions}
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
        />
         <div className="flex justify-center mt-4">
          <button
            onClick={handleApplyFilters}
            className="bg-dark-gray text-primary px-4 py-2 shadow-2xl rounded-2xl w-8/12"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
