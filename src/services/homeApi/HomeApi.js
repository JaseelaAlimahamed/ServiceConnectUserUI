
export const fetchSearching = async (query) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/customer/search/?search=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch ');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };