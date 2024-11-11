import useHomeData from '../../../components/user/homePageComponents/hooks/useHomeData';
import ServicesSection from '../../../components/user/homePageComponents/ServicesSection';
import SearchBar from '../../../components/user/homePageComponents/SearchBar';
import ServicesCategorySection from '../../../components/user/homePageComponents/ServicesCategorySection';
import TopServiceProviders from '../../../components/user/homePageComponents/TopServiceProviders';
import BannerSlider from '../../../components/user/homePageComponents/BannerSlider';
import BottomNavBar from '../../../components/reUsableComponents/BottomNavBar';

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
        <div className="overflow-x-hidden">
        {isLoading ? (
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <p>Loading...</p>
            </div>
        ) : (
            <div className=" py-4 mt-16 lg:ml-6  lgm:ml-8 md:mt-5 md:px-4 lg:px-6 lgx:ml-16 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[66vw] lgm:max-w-[76vw] lgx:max-w-[78vw] lg:max-w-[78vw] xl:max-w-screen-xl">

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
