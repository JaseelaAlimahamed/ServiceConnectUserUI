import { useState, useEffect } from 'react';
import ProfileCard from '../../components/user/ProviderProfilePageComponents/ProfileCard';
import AboutSection from '../../components/user/ProviderProfilePageComponents/AboutSection';
import ServicesSection from '../../components/user/ProviderProfilePageComponents/ServicesSection';
import ReviewsSection from '../../components/user/ProviderProfilePageComponents/ReviewsSection';
import ButtonComponent from '../../components/reUsableComponents/ButtonComponent';
import ProfilePic from '../../components/user/ProviderProfilePageComponents/ProfilePic';
import {
    FaWrench,
    FaMobileAlt,
    FaWater,
    FaVolumeUp,
    FaLock,
    FaBroom,
    FaLightbulb,
} from 'react-icons/fa';
import MediaGrid from '../../components/user/ProviderProfilePageComponents/MediaGrid';

const ProviderProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [aboutDescription, setAboutDescription] = useState('');
    const [servicesData, setServicesData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [imagesData, setImagesData] = useState([]);
    const [videosData, setVideosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API call with a timeout
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            profileData: {
                                distance: 3,
                                rating: 4.2,
                                reviews: 32,
                                name: 'William S. Cunningham',
                                occupation: 'Plumber',
                                mediaCount: 21,
                                servicesListed: 2,
                                imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
                            },
                            aboutDescription: `
                Graphic Design is now a popular profession. It offers various opportunities in the fields of marketing, advertising, web design, and many more.
                Whether you're working on digital media or print, understanding design principles is key. Beyond the aesthetic appeal, graphic designers must also
                focus on delivering a message effectively. The profession is challenging but rewarding, as it allows individuals to use both creativity and strategy.
              `,
                            servicesData: [
                                { name: 'Plumbing', icon: FaWrench },
                                { name: 'Access Mobile, Desktop & TV', icon: FaMobileAlt },
                                { name: 'Water tank fitting', icon: FaWater },
                                { name: 'Audio installation', icon: FaVolumeUp },
                                { name: 'Lockset changing', icon: FaLock },
                                { name: 'Pump cleaning', icon: FaBroom },
                                { name: 'Wiring', icon: FaLightbulb },
                            ],
                            reviewsData: [
                                {
                                    name: 'William S. Cunningham',
                                    rating: 4.5,
                                    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
                                    review:
                                        'Excellent service! Highly recommended for any plumbing needs. Very professional and efficient.',
                                    likes: 578,
                                    time: '2 Weeks Ago',
                                },
                                {
                                    name: 'Martha E. Thompson',
                                    rating: 4.5,
                                    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
                                    review:
                                        'Great experience! The plumber arrived on time and fixed the issue promptly.',
                                    likes: 342,
                                    time: '3 Weeks Ago',
                                },
                            ],
                            imagesData: [
                                { url: 'https://via.placeholder.com/150', alt: 'Work Image 1' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Image 2' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Image 3' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Image 4' },
                            ],
                            videosData: [
                                { url: 'https://via.placeholder.com/150', alt: 'Work Video 1' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Video 2' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Video 3' },
                                { url: 'https://via.placeholder.com/150', alt: 'Work Video 4' },
                            ],
                        });
                    }, 1000);
                });

                setProfileData(data.profileData);
                setAboutDescription(data.aboutDescription);
                setServicesData(data.servicesData);
                setReviewsData(data.reviewsData);
                setImagesData(data.imagesData);
                setVideosData(data.videosData);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                    label="Book service"
                    btnWidth="100%"
                    onClick={handleBookService}
                />
            </div>
        </div>
    );
};

export default ProviderProfile;
