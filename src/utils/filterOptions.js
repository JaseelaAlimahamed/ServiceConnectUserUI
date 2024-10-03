 const filterOptions = {
  "/services": [
    {
      type: "checkbox",
      label: "SubCategories",
      options: ["Food Delivery", "Plumbing", "Electrician", "Carpenter"],
    },
    {
      type: "radio",
      label: "Price",
      options: ["Paid", "Free"],
    },
    {
      type: "checkbox",
      label: "Rating",
      options: ["4.5 & Up", "4.0 & Up", "3.5 & Up"],
    },
    {
      type: "radio",
      label: "Duration",
      options: ["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"],
    },
    {
      type: "dropdown",
      label: "Location",
      options: ["New York", "Los Angeles", "San Francisco", "Chicago"],
    },
  ],
  //addmore filter options for different routes
};

export default filterOptions