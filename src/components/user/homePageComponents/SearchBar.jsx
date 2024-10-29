import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { fetchSearching } from "../../../services/homeApi/HomeApi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


const SearchBar = () => {

    const [query, setQuery] = useState(''); // State to store user input
  const [results, setResults] = useState([]); // State to store search results
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  

    // UseEffect to fetch data whenever the query changes
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);  // Reset  list when the input is empty
      return;
    }

    const fetchData = async () => {
      
      setError(null);
      try {
        const result = await fetchSearching(query);
        setResults(result);  // Update the state with API response
      } catch (err) {
        setError('Failed to fetch ditails Please try again.');
      
        
      }
      query?setLoading(true):setLoading(false);
    };

    // Debounce search: wait 500ms after the user stops typing
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500);

    // Clean up the timeout to avoid multiple API calls on each keystroke
    return () => clearTimeout(timeoutId);

  }, [query]);  // Effect is triggered whenever the `query` changes

    console.log(results)

    return (
      <div>
        <div className="flex items-center justify-center mt-4">
            <div className="relative max-w-md w-96 drop-shadow-lg">
                <RiSearch2Line className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />
                <input
                    type="text"
                    placeholder="Search Services..."
                    className="w-full h-16 py-3 pl-10 pr-4 text-lg border text-primary placeholder:text-primary placeholder:text-center bg-medium-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <HiOutlineAdjustmentsHorizontal className="absolute top-0 bottom-0 my-auto rounded bg-primary w-9 h-9 text-dark-gray right-3" />
            </div>
           
        </div>
        
        </div>
    );
};

export default SearchBar;