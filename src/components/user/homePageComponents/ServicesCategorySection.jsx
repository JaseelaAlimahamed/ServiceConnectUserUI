import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useHorizontalScroll from "./hooks/useHorizontalScroll.js";
import ServiceCard from "../../reUsableComponents/homeReusuableComponents/ServiceCategoryCard.jsx";
import serviceCategories from "./mockData/ServiceCategoriesData.jsx";

/**
 * ServiceCategorySection component that displays a horizontally scrollable list of service categories.
 * Includes navigation arrows for scrolling left and right.
 */
const ServiceCategorySection = () => {
    const scrollRef = useRef(null); // Ref for the scrollable container
    const { canScrollLeft, canScrollRight, scrollLeft, scrollRight } =
        useHorizontalScroll(scrollRef); // Custom hook to handle horizontal scrolling

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-light-violet">
                    Service Categories
                </h2>
                <h3 className="text-xl font-bold cursor-pointer text-light-violet hover:underline">
                    SEE ALL
                </h3>
            </div>

            <div className="relative px-10">
                {/* Left arrow for scrolling */}
                {canScrollLeft && (
                    <button
                        className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full top-20 hover:bg-gray-300"
                        onClick={scrollLeft}
                    >
                        <FaArrowLeft />
                    </button>
                )}

                {/* Scrollable container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar"
                >
                    {serviceCategories.map((category) => (
                        <div key={category.id} className="flex-shrink-0 snap-start">
                            <ServiceCard
                                imgUrl={category.imgUrl}
                                title={category.title}
                                altText={category.title}
                            />
                        </div>
                    ))}
                </div>

                {/* Right arrow for scrolling */}
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

export default ServiceCategorySection;
