import React, { useState, useEffect, useRef } from "react";
import { RiSearch2Line, RiCloseLine } from "react-icons/ri";
import axios from "axios";

const SearchIconComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleMouseLeave = () => {
    setShowInput(false);
    setQuery("");
    setSuggestions([]);
  };

  // Fetch suggestions
  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/suggestions?query=${query}`);
          if (Array.isArray(response.data)) {
            setSuggestions(response.data);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setSuggestions([]);
        }
      };
      fetchData();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Handle search submission and send query and id to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    const id = 12345;

    try {
      const response = await axios.post("/api/search", { query, id });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };

  // searchHistory functionality
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

  // Removehistory functionality
  const removeHistoryItem = (itemToRemove) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToRemove
    );
    setSearchHistory(updatedHistory);
    setQuery("");
  };

  return (
    <div
      className="flex justify-center bg-opacity-50 p-2"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative inline-block w-full sm:w-auto">
        {/* searchicon */}
        {!showInput && (
          <RiSearch2Line
            color="black"
            size={24}
            className="text-black cursor-pointer"
            onClick={handleSearchClick}
          />
        )}

        <div
          className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${
            showInput ? "w-full " : "w-0"
          }`}
        >
          {/* inputfield */}
          {showInput && (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex items-center w-full"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for.."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full sm:w-80 md:w-full lg:max-w-lg px-4 h-12 pl-10 pr-4 placeholder:text-primary mt-1 rounded-md border border-light-gray bg-medium-gray text-dark-gray focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </form>
            </>
          )}
        </div>

        {/* search suggestions */}
        {showInput && (
          <div className="absolute z-10 w-full sm:w-80">
            {suggestions.length > 0 && (
              <ul className="bg-white text-black shadow-md max-h-48 overflow-y-auto">
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

            {/* searchHistory */}
            {searchHistory.length > 0 && (
              <ul className="bg-gray-100 text-black rounded-md shadow-md max-h-screen mt-2">
                <h3 className="p-2 font-bold">Recent Searches</h3>
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
