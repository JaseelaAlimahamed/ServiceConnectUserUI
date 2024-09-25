import React from 'react';
import ServiceCard from '../../reUsableComponents/userHomeReUsableComponents/ServiceCardComponent';

// Example data for services
const servicesData = [
    { id: 1, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 2, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 3, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 4, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 }
];

/**
 * AdsComponent to display a list of service cards in a scrollable container.
 * This component can be used for displaying ads or featured services.
 */
const AdsComponent = () => {
    return (
        <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[280px] h-screen bg-dark-gray flex flex-col items-center overflow-y-scroll no-scrollbar">
            {/* Ads Heading */}
            <h2 className="my-2 text-lg font-semibold text-white text-left w-full sm:w-[250px] mt-20">Ads</h2>

            {/* Mapping over servicesData to display ServiceCards */}
            {servicesData.map((service) => (
                <ServiceCard
                    key={service.id}
                    category={service.category}
                    serviceTitle={service.serviceTitle}
                    price={service.price}
                    rating={service.rating}
                    reviews={service.reviews}
                    className="mb-4 h-[220px] w-full sm:w-[250px] flex-none"
                />
            ))}
        </div>
    );
};

export default AdsComponent;
