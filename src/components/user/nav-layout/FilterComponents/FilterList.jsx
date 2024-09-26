import React, { useCallback } from "react";

const FilterList = ({ filterOptions, setSelectedFilters, selectedFilters }) => {
  const handleFilterChange = useCallback(
    (label, value, isCheckBox, isChecked) => {
      setSelectedFilters((prev) => {
        if (isCheckBox) {
          // If checkbox is unchecked, remove the value from the array
          if (!isChecked) {
            const newValues = prev[label].filter((v) => v !== value);
            return { ...prev, [label]: newValues.length > 0 ? newValues : [] };
          }

          // If checkbox is checked, add it to the array
          return {
            ...prev,
            [label]: prev[label] ? [...prev[label], value] : [value],
          };
        } else {
          return { ...prev, [label]: value };
        }
      });
    },
    [setSelectedFilters]
  );

  return (
    <div className="p-4 ">
      {filterOptions.map((filter, idx) => (
        <div key={idx} className="mb-6">
          <label className="block font-semibold text-lg mb-2 text-medium-gray">
            {filter.label}
          </label>
          <div className="ml-3">
            {/* checkbox */}
            {filter.type === "checkbox" &&
              filter.options.map((option, i) => (
                <div key={i} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={
                      selectedFilters[filter.label]?.includes(option) || false
                    }
                    onChange={(e) =>
                      handleFilterChange(
                        filter.label,
                        option,
                        true,
                        e.target.checked
                      )
                    }
                    aria-label={option}
                    className="mr-2 h-6 w-6  rounded-full "
                  />
                  <label className="text-sm ">{option}</label>
                </div>
              ))}

            {/* radio */}
            {filter.type === "radio" &&
              filter.options.map((option, i) => (
                <div key={i} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={filter.label}
                    value={option}
                    checked={selectedFilters[filter.label] === option}
                    onChange={() =>
                      handleFilterChange(filter.label, option, false)
                    }
                    aria-label={option}
                    className="mr-2 h-6 w-6 shadow "
                  />
                  <label className="text-sm ">{option}</label>
                </div>
              ))}

            {/* dropdown */}
            {filter.type === "dropdown" && (
              <div className="flex items-center mb-2">
                <select
                  className=" shadow rounded "
                  onChange={(e) =>
                    handleFilterChange(filter.label, e.target.value, false)
                  }
                  value={selectedFilters[filter.label] || ""}
                  aria-label={filter.label}
                >
                  <option value="" disabled>
                    Select {filter.label}
                  </option>
                  {filter.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
