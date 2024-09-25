import React, { useState } from 'react';
import ServiceCard from '../../reUsableComponents/userHomeReUsableComponents/ServiceCardComponent';

// Sample services data
const servicesData = [
    { id: 1, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830, imgUrl: 'https://via.placeholder.com/240' },
    { id: 2, category: 'Plumbing', serviceTitle: 'Advertisement Designing', price: 4, rating: 4, reviews: 12580, imgUrl: 'https://via.placeholder.com/240' },
    { id: 3, category: 'Electrical', serviceTitle: 'Home Electrical Repairs', price: 3, rating: 4.5, reviews: 970, imgUrl: 'https://via.placeholder.com/240' },
    { id: 4, category: 'Health', serviceTitle: 'Fitness Coaching', price: 5, rating: 5, reviews: 1500, imgUrl: 'https://via.placeholder.com/240' },
    { id: 5, category: 'Electrical', serviceTitle: 'Residential Cleaning Services', price: 2.5, rating: 4.2, reviews: 850, imgUrl: 'https://via.placeholder.com/240' },
    { id: 6, category: 'Automotive', serviceTitle: 'Car Wash and Detailing', price: 3.5, rating: 4.8, reviews: 1200, imgUrl: 'https://via.placeholder.com/240' },
    { id: 7, category: 'Landscaping', serviceTitle: 'Lawn Mowing and Maintenance', price: 2, rating: 4.6, reviews: 2000, imgUrl: 'https://via.placeholder.com/240' },
    { id: 8, category: 'Education', serviceTitle: 'Math Tutoring Services', price: 4.5, rating: 4.9, reviews: 230, imgUrl: 'https://via.placeholder.com/240' },
    { id: 9, category: 'Health', serviceTitle: 'Nutrition Consultation', price: 5, rating: 4.7, reviews: 620, imgUrl: 'https://via.placeholder.com/240' },
    { id: 10, category: 'Health', serviceTitle: 'Hair Styling and Makeup', price: 4.2, rating: 4.4, reviews: 900, imgUrl: 'https://via.placeholder.com/240' },
    { id: 11, category: 'Automotive', serviceTitle: 'Furniture Moving Services', price: 3, rating: 4.1, reviews: 1400, imgUrl: 'https://via.placeholder.com/240' },
    { id: 12, category: 'Electrical', serviceTitle: 'Computer Repair and Maintenance', price: 4, rating: 4.3, reviews: 510, imgUrl: 'https://via.placeholder.com/240' }
];

// Get unique categories from servicesData
const uniqueCategories = ['All', ...new Set(servicesData.map(service => service.category))];

/**
 * ServicesSection component that displays a list of services and allows filtering by category.
 * The component supports horizontal scrolling for mobile view and flex-wrap for larger screens.
 */
const ServicesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter services based on the selected category
    const filteredServices = selectedCategory === 'All'
        ? servicesData
        : servicesData.filter(service => service.category === selectedCategory);

    return (
        <div className="py-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <h2 className="mb-4 text-2xl font-bold">Popular Services</h2>
                <h3 className="mb-4 text-xl font-bold cursor-pointer">SEE ALL</h3>
            </div>

            {/* Category Filters */}
            <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar scroll-smooth">
                {uniqueCategories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-[#736a68] text-white'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Services Section - Horizontal scroll on mobile */}
            <div className="flex gap-6 overflow-x-auto md:overflow-x-visible md:flex-wrap scroll-smooth no-scrollbar">
                {filteredServices.slice(0, 8).map(service => (
                    <ServiceCard
                        key={service.id}
                        category={service.category}
                        serviceTitle={service.serviceTitle}
                        price={service.price}
                        rating={service.rating}
                        reviews={service.reviews}
                        imgUrl={service.imgUrl}
                        className="min-w-[250px] max-w-[300px] h-[220px] flex-shrink-0"
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
