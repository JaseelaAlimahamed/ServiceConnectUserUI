import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeliveryPersonCard from "../../components/user/serviceProviderListingComponents/ServiceDeliveryPersonCard";
import FilterButtons from "../../components/user/serviceProviderListingComponents/LocationFilterButton";
import serviceProviderListApi from "../../services/serviceProviderList/serviceProviderListApi";
import NoImage from '../../assets/NoImage.jpg';

const Services = () => {
  const [data, setData] = useState([]);
  const [popUp, setPopup] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const toCategories = () => {
    setPopup(false);
    navigate("/categories");
  };

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
    <div className="p-4 sm:p-4 md:p-8 lg:p-10 xl:p-12 bg-light-gray min-h-screen">
      {/* Location and Open Request Section */}
      <div className="bg-light-gray p-4 mb-4 lg:ml-12">
        <div className="flex items-center gap-2">
          <span>[Location name]</span>
          <span className="text-sm text-blue-500 cursor-pointer">✎</span>
        </div>
        <button className="mt-2 w-full py-2 bg-dark-gray text-primary rounded-2xl">
          Open Request (Request to Random Accounts)
        </button>
      </div>

      {/* Filter Buttons */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* List of Services or No Data Message */}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ml-12">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="cursor-pointer"
            >
              <DeliveryPersonCard
                name={item.full_name}
                price={item.price}
                rating={item.rating}
                img={item.profile_image || NoImage}
              />
            </div>
          ))}
        </div>
      ) : (
        popUp && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl font-semibold text-center mb-4">
              No Service Provider Available for this SubCategory
            </p>
            <button
              onClick={toCategories}
              className="bg-secondary text-white px-4 py-2 rounded-full w-1/3 sm:w-1/4 lg:w-1/5"
            >
              OK
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Services;
