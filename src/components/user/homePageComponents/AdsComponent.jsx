import ServiceCard from '../../reUsableComponents/ServiceCardComponent';

// Example data passed from outside or imported
const servicesData = [
    { id: 1, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 2, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 3, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 },
    { id: 4, category: 'Plumbing', serviceTitle: 'Complete Residential Plumbing', price: 2, rating: 4, reviews: 7830 }
];

const AdsComponent = () => {
    return (
        <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[280px] h-screen bg-dark-gray flex flex-col items-center overflow-y-scroll no-scrollbar">
            <h2 className="my-2 text-lg font-semibold text-white text-left w-full sm:w-[250px]">Ads</h2>
            {servicesData.map((service) => (
                <ServiceCard
                    key={service.id}
                    category={service.category}
                    serviceTitle={service.serviceTitle}
                    price={service.price}
                    rating={service.rating}
                    reviews={service.reviews}
                    className='mb-4 h-[220px] w-full sm:w-[250px] flex-none'
                />
            ))}
        </div>
    );
};

export default AdsComponent;
