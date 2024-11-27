import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeliveryPersonCard from "../../components/user/serviceProviderListingComponents/ServiceDeliveryPersonCard";
import FilterButtons from "../../components/user/serviceProviderListingComponents/LocationFilterButton"; // Import the FilterButtons component

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
const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((item) => {
    if (filter === "nearby") {
      return item.distance <= 5;
    } else if (filter === "10km") {
      return item.distance <= 10;
    }
    return true;
  });
  const handleCardClick = (id) => {
    navigate(`/provider-profile/${id}`); // Adjust the route as needed
  };

  return (
    <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">
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
      <div className="p-0 grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-auto ">
        {filteredData.map((item) => (
          <div   onClick={() =>
            handleCardClick(item.id)
          }>
          <DeliveryPersonCard
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            distance={item.distance}
            booked={item.booked}
          />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
