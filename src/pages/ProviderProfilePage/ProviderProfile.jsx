import React from 'react';
import { useNavigate ,useParams} from 'react-router-dom';

import useProviderProfileData from '../../components/user/ProviderProfilePageComponents/hooks/useProviderProfileData';
import ProfileCard from '../../components/user/ProviderProfilePageComponents/ProfileCard';
import AboutSection from '../../components/user/ProviderProfilePageComponents/AboutSection';
import ServicesSection from '../../components/user/ProviderProfilePageComponents/ServicesSection';
import ReviewsSection from '../../components/user/ProviderProfilePageComponents/ReviewsSection';
import ButtonComponent from '../../components/reUsableComponents/ButtonComponent';
import ProfilePic from '../../components/user/ProviderProfilePageComponents/ProfilePic';
import MediaGrid from '../../components/user/ProviderProfilePageComponents/MediaGrid';

const ProviderProfile = () => {
    
    const navigate = useNavigate();
    const id = useParams().id;
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
        console.log('Book service clicked');
        // Navigate to the booking page with the dynamic id
        navigate(`/request-service/${profileData.id}`);
      };

    const handleChatClick = () => {
        // Implement the chat logic here
        console.log('Chat button clicked');
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
                imageUrl={profileData.imageUrl}
                altText={`${profileData.name}'s Profile Picture`}
                onChatClick={handleChatClick}
            />
            <div className="mx-4 mt-16 md:mx-10 gap-2">
                <ProfileCard {...profileData} />
                <AboutSection description={aboutDescription} />
                <ServicesSection services={servicesData} />
                <ReviewsSection reviews={reviewsData} id={profileData.id} />
                <MediaGrid title="Images" mediaItems={imagesData} type="image" />
                <MediaGrid title="Videos" mediaItems={videosData} type="video" />
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
