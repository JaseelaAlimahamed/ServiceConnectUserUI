import { useRef } from "react";
import ServiceCard from "../../reUsableComponents/homeReusuableComponents/ServiceCategoryCard.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useHorizontalScroll from "./hooks/useHorizontalScroll.js";

// Sample Data for Service Providers
const serviceProviders = [
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
];

/**
 * TopServiceProviders component displays a horizontally scrollable list of top service providers.
 * It includes left and right arrow buttons for navigation and automatically handles scrollable areas.
 */
const TopServiceProviders = () => {
    const scrollRef = useRef(null);
    const { canScrollLeft, canScrollRight, scrollLeft, scrollRight } = useHorizontalScroll(scrollRef);

    return (
        <div className="relative mb-10">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-light-violet">Top Service Providers</h2>
                <h3 className="text-xl font-bold cursor-pointer text-light-violet hover:underline">SEE ALL</h3>
            </div>

            {/* Scrollable Service Providers Section */}
            <div className="relative px-10">
                {canScrollLeft && (
                    <button
                        className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full top-20 hover:bg-gray-300"
                        onClick={scrollLeft}
                    >
                        <FaArrowLeft />
                    </button>
                )}

                <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar">
                    {serviceProviders.map((provider) => (
                        <div key={provider.id} className="flex-shrink-0 snap-start">
                            <ServiceCard
                                imgUrl={provider.imgUrl}
                                title={provider.name}
                                altText={provider.name}
                            />
                        </div>
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full top-20 hover:bg-gray-300"
                        onClick={scrollRight}
                    >
                        <FaArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TopServiceProviders;
