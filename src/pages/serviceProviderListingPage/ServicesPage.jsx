import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeliveryPersonCard from "../../components/user/serviceProviderListingComponents/ServiceDeliveryPersonCard";
import FilterButtons from "../../components/user/serviceProviderListingComponents/LocationFilterButton";
import serviceProviderListApi from "../../services/serviceProviderList/serviceProviderListApi";

const Services = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await serviceProviderListApi(id);
        console.log("Response data:", response);
        setData(response);
      } catch (err) {
        console.error("Error fetching service providers:", err);
      }
    };

    callData();
  }, [id]);

  const handleCardClick = (providerId) => {
    navigate(`/provider-profile/${providerId}`);
  };

  return (
    <div className="p-4 sm:p-6 
          md:p-8 
          lg:p-10 
          xl:p-12 bg-light-gray min-h-screen ml-12">
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
      <div className="p-0 grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-auto">
        {data.map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item.id)}>
            <DeliveryPersonCard
              name={item.full_name}
              price={item.price}
              rating={item.rating}
              // reviews={item.reviews}
              // distance={item.distance}
              // booked={item.booked}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
