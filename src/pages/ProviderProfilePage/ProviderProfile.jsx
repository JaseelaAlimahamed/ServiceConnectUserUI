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
                console.log(error);
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
        // Navigate to the booking page with the dynamic id
        navigate(`/request-service/${profileData.id}`);
    };


    const handleChatClick = () => {
        // Implement the chat logic here
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
        <div className="bg-light-gray min-h-screen">
            <ProfilePic
                imageUrl={profileData.imageUrl}
                altText={`${profileData.name}'s Profile Picture`}
                onChatClick={handleChatClick}
            />

            <div className="mx-4 mt-16 md:mx-10 gap-2 p-6 lg:ml-24">
                <ProfileCard
                    name={data.full_name}
                    servicesListed={data.services.length}
                    reviews={data.reviews.length}
                    mediaCount={0}
                />
                <AboutSection description={data.about} />
                <ServicesSection services={data.services} />
                {data.reviews && data.reviews.length > 0 && (
                    <ReviewsSection reviews={data.reviews} />
                )}
                {data.videos && data.videos.length > 0 && (
                    <MediaGrid title="Images" mediaItems={imagesData} type="image" />
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