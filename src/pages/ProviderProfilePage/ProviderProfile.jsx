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
  const id = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getServiceProviderDetails = async () => {
      try {
        const response = await fetchServiceProviderDetails();
        setData(response);
      } catch (error) {
        console.log("Error fetching provider details:", error);
      }
    };

    getServiceProviderDetails();
  }, []);

  const {
    profileData,
    aboutDescription,
    servicesData,
    reviewsData,
    imagesData,
    videosData,
    loading,
    error,
  } = useProviderProfileData();

  const handleBookService = () => {
    console.log("Book service clicked");
    navigate(`/request-service/${id}`);
  };

  const handleChatClick = () => {
    console.log("Chat button clicked");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-3 bg-gray-200">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">
      <ProfilePic
        imageUrl={data.imageUrl || noImage}
        altText={`${data.full_name || "Profile"}'s Profile Picture`}
        onChatClick={handleChatClick}
      />
      <div className="mx-4 mt-16 md:mx-10 gap-2">
        <ProfileCard
          name={data.full_name}
          servicesListed={data.services?.length || 0}
          reviews={data.reviews?.length || 0}
          mediaCount={0}
        />
        <AboutSection description={data.about} />
        <ServicesSection services={data.services} />
        {data.reviews && data.reviews.length > 0 ? (
          <ReviewsSection reviews={data.reviews} /> 
        ) : (
          <div className="bg-white my-5 px-5 py-2 rounded-lg">
            <h1 className="text-xl font-bold">No reviews</h1>
          </div>
        )}
        {data.videos && data.videos.length > 0 ? (
          <MediaGrid title="Images" mediaItems={imagesData} type="image" />
        ) : (
          <div className="bg-white my-5 px-5 py-2 rounded-lg">
            <h1 className="text-xl font-bold">No videos and images</h1>
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
