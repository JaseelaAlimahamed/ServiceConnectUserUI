import useHomeData from '../../components/user/homePageComponents/hooks/useHomeData';
import ServicesSection from '../../components/user/homePageComponents/ServicesSection';
import SearchBar from '../../components/user/homePageComponents/SearchBar';
import ServicesCategorySection from '../../components/user/homePageComponents/ServicesCategorySection';
import TopServiceProviders from '../../components/user/homePageComponents/TopServiceProviders';
import BannerSlider from '../../components/reUsableComponents/homeReusuableComponents/BannerSlider';
import BottomNavBar from '../../components/reUsableComponents/BottomNavBar';

/**
 * Home component that serves as the main page.
 * Fetches all necessary data using the useHomeData hook and passes it to child components.
 */
const Home = () => {
    const {
        bannerData,
        serviceCategories,
        servicesData,
        serviceProviders,
    } = useHomeData();

    // Check if data is still loading
    const isLoading = bannerData.length === 0 || serviceCategories.length === 0 || servicesData.length === 0 || serviceProviders.length === 0;

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen bg-gray-200">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="p-4 mt-20">
                    <SearchBar />
                    <BannerSlider bannerData={bannerData} />
                    <ServicesCategorySection serviceCategories={serviceCategories} />
                    <ServicesSection servicesData={servicesData} />
                    <TopServiceProviders serviceProviders={serviceProviders} />
                    <BottomNavBar />
                </div>
            )}
        </div>
    );
};

export default Home;
