import React, { useState, useEffect } from "react";
import InputFieldComponent from "../reUsableComponents/InputFieldComponent"
import { RiSearch2Line, RiCloseLine } from "react-icons/ri";


const SearchIconComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleMouseLeave = () => {
    setShowInput(false);
    setQuery("");
    setSuggestions([]);
  };
  // function for fetch sugestions
  useEffect(() => {
    console.log("User typing: ", query);
    // call ApI  here to fetch suggestions
    if (query.length > 0) {
      setSuggestions([]); // fetch and set real suggestions here
    } else {
      setSuggestions([]);
    }
  }, [query]);
  //  function for  search
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const updatedHistory = searchHistory.filter(
        (item) => item !== searchTerm
      );
      setSearchHistory([searchTerm, ...updatedHistory]);
      setQuery(searchTerm);
    }
    setSuggestions([]);
  };
//  function for remove search item from history
  const removeHistoryItem = (itemToRemove) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToRemove
    );
    setSearchHistory(updatedHistory);
    setQuery("");
  };

  return (
    <div
      className="flex justify-center items-center mx-8 sm:mx-16 md:mx-24"
      onMouseLeave={handleMouseLeave}
    >
      {/* SearchIcon */}
      <div className="w-full max-w-2xl relative">
        {!showInput && (
          <RiSearch2Line
            size={24}
            onClick={handleSearchClick}
            className="cursor-pointer"
          />
        )}
        {/* InputField */}
        {showInput && (
          <form onSubmit={handleSearch}>
            <InputFieldComponent
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              inputWidth="100%"
            />
          </form>
        )}

        {showInput && (
          <div className="absolute z-10 w-full">
             {/* Suggestions Dropdown  */}
            {suggestions.length > 0 && (
              <ul className="bg-white text-black shadow-md max-h-screen w-full overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSearch(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            {/* Search History Dropdown */}
            {searchHistory.length > 0 && (
              <ul className="bg-gray-100 text-black shadow-md max-h-48 overflow-y-auto mt-2 w-full">
                <h3 className="p-2 font-bold">Search History</h3>
                {searchHistory.map((historyItem, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSearch(historyItem)}
                  >
                    <div className="flex items-center justify-between">
                      {historyItem}
                      <RiCloseLine
                        className="text-black cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeHistoryItem(historyItem);
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIconComponent;
