//  Fetch suggestions based on the query
  export const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`/api/suggestions?query=${query}`);
      if (!response.ok) {
        throw new Error("Error fetching suggestions");
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  
// Submit search query and id to the backend
  export const submitSearch = async (query, id) => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, id }),
      });
  
      if (!response.ok) {
        throw new Error("Error submitting search");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };
  