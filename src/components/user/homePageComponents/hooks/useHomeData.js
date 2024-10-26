import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch home data asynchronously using async/await.
 * Returns banner data, service categories, services data, and service providers.
 */
const useHomeData = () => {
    const [bannerData, setBannerData] = useState([]);
    const [serviceCategories, setServiceCategories] = useState([]);
    const [servicesData, setServicesData] = useState([]);
    const [serviceProviders, setServiceProviders] = useState([]);

    // Simulating an API call with a delay using a Promise
    const simulateApiCall = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 200);
        });
    };

    // Using useEffect to fetch the data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching banner data
                const fetchedBannerData = await simulateApiCall([
                    {
                        discount: '25% OFF',
                        title: "Today's Special",
                        description: 'Get a Discount for Every Course Order only Valid for Today!',
                        imgUrl: 'https://img.freepik.com/free-vector/abstract-black-futuristic-background_361591-1761.jpg?w=826&t=st=1728750012~exp=1728750612~hmac=85df7cffc8e130e5084c2bcb639be71615edba7f90569a8f3e004cee41379fdd',
                    },
                    {
                        discount: '30% OFF',
                        title: 'Holiday Sale',
                        description: "Limited Time Offer for all Courses. Don't Miss Out!",
                        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvPO8MNLebKGKrEnqEZCcmZGrXxWLoEtiGQ&s',
                    },
                    {
                        discount: '20% OFF',
                        title: 'Back to School',
                        description: 'Special Discounts on Selected Courses. Learn & Save!',
                        imgUrl: 'https://via.placeholder.com/1920x400',
                    },
                ]);

                // Fetching service categories data
                const fetchedServiceCategories = await simulateApiCall([
                    {
                        id: 1,
                        imgUrl:
                            "https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg",
                        title: "Plumbing",
                    },
                    {
                        id: 2,
                        imgUrl:
                            "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg",
                        title: "Electrical",
                    },
                    {
                        id: 3,
                        imgUrl:
                            "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg",
                        title: "Carpentry",
                    },
                    {
                        id: 4,
                        imgUrl:
                            "https://content.jdmagicbox.com/v2/comp/mumbai/h3/022pxx22.xx22.231107164034.p9h3/catalogue/l-t-labour-and-manpower-supplier-dahisar-west-mumbai-labour-contractors-5falo0j56j.jpg",
                        title: "Construction",
                    },
                    {
                        id: 5,
                        imgUrl:
                            "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/510968128CleaningTechnician.jpg",
                        title: "Cleaning",
                    },
                    {
                        id: 6,
                        imgUrl:
                            "https://static.vecteezy.com/system/resources/previews/030/596/704/large_2x/gardening-and-agriculture-concept-young-woman-farm-worker-gardening-flowers-in-garden-gardener-planting-flowers-for-bouquet-summer-gardening-work-girl-gardening-at-home-in-backyard-photo.jpg",
                        title: "Gardening",
                    },
                    {
                        id: 7,
                        imgUrl:
                            "https://5.imimg.com/data5/ANDROID/Default/2022/4/SJ/LI/OB/148640419/product-jpeg-500x500.jpg",
                        title: "Driver",
                    },
                    {
                        id: 8,
                        imgUrl:
                            "https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg",
                        title: "Plumbing",
                    },
                    {
                        id: 9,
                        imgUrl:
                            "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg",
                        title: "Electrical",
                    },
                    {
                        id: 10,
                        imgUrl:
                            "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg",
                        title: "Carpentry",
                    },
                ]);

                // Fetching services data
                const fetchedServicesData = await simulateApiCall([
                    { id: 1, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 2, category: 'Plumbing', serviceTitle: 'Advertisement Designing', price: 4, rating: 4, reviews: 12580, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 3, category: 'Electrical', serviceTitle: 'Home Electrical Repairs', price: 3, rating: 4.5, reviews: 970, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 4, category: 'Health', serviceTitle: 'Fitness Coaching', price: 5, rating: 5, reviews: 1500, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 5, category: 'Electrical', serviceTitle: 'Residential Cleaning Services', price: 2.5, rating: 4.2, reviews: 850, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 9, category: 'Health', serviceTitle: 'Nutrition Consultation', price: 5, rating: 4.7, reviews: 620, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 10, category: 'Health', serviceTitle: 'Hair Styling and Makeup', price: 4.2, rating: 4.4, reviews: 900, imgUrl: 'https://via.placeholder.com/240' },
                    { id: 12, category: 'Electrical', serviceTitle: 'Computer Repair and Maintenance', price: 4, rating: 4.3, reviews: 510, imgUrl: 'https://via.placeholder.com/240' }
                ]);

                // Fetching service providers data
                const fetchedServiceProviders = await simulateApiCall([
                    { id: 1, name: "Sonja", imgUrl: "https://via.placeholder.com/150" },
                    { id: 2, name: "Jensen", imgUrl: "https://via.placeholder.com/150" },
                    { id: 3, name: "Victoria", imgUrl: "https://via.placeholder.com/150" },
                    { id: 4, name: "Castaldo", imgUrl: "https://via.placeholder.com/150" },
                    { id: 5, name: "Emily", imgUrl: "https://via.placeholder.com/150" },
                    { id: 6, name: "Lucas", imgUrl: "https://via.placeholder.com/150" },
                    { id: 7, name: "Sophie", imgUrl: "https://via.placeholder.com/150" },
                    { id: 8, name: "Emily", imgUrl: "https://via.placeholder.com/150" },
                    { id: 9, name: "Lucas", imgUrl: "https://via.placeholder.com/150" },
                    { id: 10, name: "Sophie", imgUrl: "https://via.placeholder.com/150" }
                ]);

                // Once all data is fetched, update the states
                setBannerData(fetchedBannerData);
                setServiceCategories(fetchedServiceCategories);
                setServicesData(fetchedServicesData);
                setServiceProviders(fetchedServiceProviders);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        // Call the async function to fetch data
        fetchData();
    }, []); // Empty dependency array means it runs once on mount

    return {
        bannerData,
        serviceCategories,
        servicesData,
        serviceProviders,
    };
};

export default useHomeData;
