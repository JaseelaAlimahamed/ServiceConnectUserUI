import ServicesSection from '../../components/user/homePageComponents/ServicesSection';
import SearchBar from '../../components/user/homePageComponents/SearchBar';
import ServiceCategorySection from '../../components/user/homePageComponents/ServicesCategorySection';
import TopServiceProviders from '../../components/user/homePageComponents/TopServiceProviders';
import BannerSlider from '../../components/reUsableComponents/homeReusuableComponents/BannerSlider';
import BottomNavBar from '../../components/reUsableComponents/BottomNavBar';

const Home = () => {

    return (
        <div className="p-4 mt-20">
            <SearchBar />
            <BannerSlider />
            <ServiceCategorySection />
            <ServicesSection />
            <TopServiceProviders />
            <BottomNavBar />
        </div>
    );
};

export default Home;