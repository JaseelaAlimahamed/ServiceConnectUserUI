import  { useState } from "react";
import DeliveryPersonCard from "./ServiceDeliveryPersonCard";
import FilterButtons from "./LocationFilterButton"; // Import the FilterButtons component

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Thomas",
      price: "₹280 - 300",
      rating: 4.2,
      reviews: 78,
      distance: 3,
      booked: false,
    },
    {
      id: 2,
      name: "Jacop",
      price: "₹280 - 300",
      rating: 3.9,
      reviews: 12,
      distance: 4,
      booked: true,
    },
    {
      id: 3,
      name: "Thomas",
      price: "₹280 - 300",
      rating: 4.2,
      reviews: 78,
      distance: 10,
      booked: false,
    },
    {
      id: 4,
      name: "Thomas",
      price: "₹280 - 300",
      rating: 4.2,
      reviews: 78,
      distance: 15,
      booked: true,
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((item) => {
    if (filter === "nearby") {
      return item.distance <= 5;
    } else if (filter === "10km") {
      return item.distance <= 10;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Location and Open Request */}
      <div className="bg-light-gray p-4">
        <div className="flex items-center gap-2">
          <span>[Location name]</span>
          <span className="text-sm text-blue-500 cursor-pointer">✎</span>
        </div>
        <button className="mt-2 w-full py-2 bg-dark-gray text-primary rounded-3xl">
          Open Request (Request to Random Accounts)
        </button>
      </div>

      {/* Use the FilterButtons component */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* List of Services */}
      <div className="p-0 md:mx-auto md:w-3/5 lg:w-1/2">
        {filteredData.map((item) => (
          <DeliveryPersonCard
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            distance={item.distance}
            booked={item.booked}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
