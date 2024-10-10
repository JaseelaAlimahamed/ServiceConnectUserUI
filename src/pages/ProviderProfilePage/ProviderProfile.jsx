import useProviderProfileData from '../../components/user/ProviderProfilePageComponents/hooks/useProviderProfileData';
import ProfileCard from '../../components/user/ProviderProfilePageComponents/ProfileCard';
import AboutSection from '../../components/user/ProviderProfilePageComponents/AboutSection';
import ServicesSection from '../../components/user/ProviderProfilePageComponents/ServicesSection';
import ReviewsSection from '../../components/user/ProviderProfilePageComponents/ReviewsSection';
import ButtonComponent from '../../components/reUsableComponents/ButtonComponent';
import ProfilePic from '../../components/user/ProviderProfilePageComponents/ProfilePic';
import MediaGrid from '../../components/user/ProviderProfilePageComponents/MediaGrid';

const ProviderProfile = () => {
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
        // Implement the booking logic here
        console.log('Book service clicked');
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
        <div className="mt-20 mb-3 bg-gray-200">
            <ProfilePic
                imageUrl={profileData.imageUrl}
                altText={`${profileData.name}'s Profile Picture`}
                onChatClick={handleChatClick}
            />
            <div className="mx-4 mt-16 md:mx-10">
                <ProfileCard {...profileData} />
                <AboutSection description={aboutDescription} />
                <ServicesSection services={servicesData} />
                <ReviewsSection reviews={reviewsData} />
                <MediaGrid title="Images" mediaItems={imagesData} type="image" />
                <MediaGrid title="Videos" mediaItems={videosData} type="video" />
                <ButtonComponent
                    label="Book Service"
                    btnWidth="100%"
                    onClick={handleBookService}
                />
            </div>
        </div>
    );
};

export default ProviderProfile;
