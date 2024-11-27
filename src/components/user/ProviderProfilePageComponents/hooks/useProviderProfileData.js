import { useState, useEffect } from 'react';
import {
    FaWrench,
    FaMobileAlt,
    FaWater,
    FaVolumeUp,
    FaLock,
    FaBroom,
    FaLightbulb,
} from 'react-icons/fa';

const useProviderProfileData = () => {
    const [profileData, setProfileData] = useState(null);
    const [aboutDescription, setAboutDescription] = useState('');
    const [servicesData, setServicesData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [imagesData, setImagesData] = useState([]);
    const [videosData, setVideosData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API call with a timeout
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            profileData: {
                                id:'1231',
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

    return {
        profileData,
        aboutDescription,
        servicesData,
        reviewsData,
        imagesData,
        videosData,
        loading,
        error,
    };
};

export default useProviderProfileData;
