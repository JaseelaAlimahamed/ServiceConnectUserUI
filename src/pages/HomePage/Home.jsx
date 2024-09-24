import ServicesSection from '../../components/user/homePageComponents/ServicesSection';
import AdsComponent from '../../components/user/homePageComponents/nav-layout/AdsComponent';
import NavBar from '../../components/user/homePageComponents/nav-layout/NavBar';
import SearchBar from '../../components/user/homePageComponents/nav-layout/SearchBar';
import ServiceCategorySection from '../../components/user/homePageComponents/ServicesCategorySection';
import SideBar from '../../components/user/homePageComponents/nav-layout/SideBar';
import { useState } from 'react';
import TopServiceProviders from '../../components/user/homePageComponents/TopServiceProviders';
import BannerSlider from '../../components/reUsableComponents/homeReusuableComponents/BannerSlider';
import BottomNavBar from '../../components/reUsableComponents/BottomNavBar';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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