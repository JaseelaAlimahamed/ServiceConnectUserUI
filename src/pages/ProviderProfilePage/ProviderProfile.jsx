import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useProviderProfileData from "../../components/user/ProviderProfilePageComponents/hooks/useProviderProfileData";
import ProfileCard from "../../components/user/ProviderProfilePageComponents/ProfileCard";
import AboutSection from "../../components/user/ProviderProfilePageComponents/AboutSection";
import ServicesSection from "../../components/user/ProviderProfilePageComponents/ServicesSection";
import ReviewsSection from "../../components/user/ProviderProfilePageComponents/ReviewsSection";
import ButtonComponent from "../../components/reUsableComponents/ButtonComponent";
import ProfilePic from "../../components/user/ProviderProfilePageComponents/ProfilePic";
import MediaGrid from "../../components/user/ProviderProfilePageComponents/MediaGrid";
import { fetchServiceProviderDetails } from "../../services/serviceProviderDetails/serviceProviderDetailsApi";
import noImage from "../../assets/Noimage.jpg";

const ProviderProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServiceProviderDetails = async () => {
      try {
        const response = await fetchServiceProviderDetails(id);
        setData(response);
      } catch (error) {
        console.error("Error fetching provider details:", error);
      } finally {
        setLoading(false);
      }
    };
    getServiceProviderDetails();
  }, [id]);

  const handleBookService = () => navigate(`/request-service/${id}`);
  const handleChatClick = () => console.log("Chat button clicked");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-light-gray min-h-screen lg:ml-24 ">
      <ProfilePic
        imageUrl={data.imageUrl || noImage}
        altText={`${data.full_name || "Profile"}'s Profile Picture`}
        onChatClick={handleChatClick}
      />
      <div className="mt-16 pb-4 mx-4 md:mx-10 space-y-6">
        <ProfileCard
          name={data.full_name}
          servicesListed={data.services?.length || 0}
          reviews={data.reviews?.length || 0}
          mediaCount={(data.images?.length || 0) + (data.videos?.length || 0)}
        />
        
        <AboutSection description={data.about || "No information available"} />
        
        <ServicesSection services={data.services || []} />
        
        {data.reviews?.length ? (
          <ReviewsSection reviews={data.reviews} />
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">No reviews available</h2>
          </div>
        )}
        
        {(data.images?.length > 0 || data.videos?.length > 0) ? (
          <MediaGrid title="Media" mediaItems={[...data.images, ...data.videos]} type="media" />
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">No videos or images available</h2>
          </div>
        )}

        <ButtonComponent
          label="Book Service"
          btnWidth="w-full"
          onClick={handleBookService}
        />
      </div>
    </div>
  );
};

export default ProviderProfile;
