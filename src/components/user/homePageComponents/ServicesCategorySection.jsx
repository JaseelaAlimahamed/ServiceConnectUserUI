import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import ServiceCard from "../../reUsableComponents/userHomeReUsableComponents/ServiceCategoryCard.jsx";

// Sample data for service categories
const serviceCategories = [
    { id: 1, imgUrl: "https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg?t=st=1726737993~exp=1726738593~hmac=7b7a2d504905b4917b2de44ac2da12b7f61f26c15d47b200e30c5af49315820e", title: 'Plumbing' },
    { id: 2, imgUrl: "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg", title: 'Electrical' },
    { id: 3, imgUrl: "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg", title: 'Carpentry' },
    { id: 4, imgUrl: "https://content.jdmagicbox.com/v2/comp/mumbai/h3/022pxx22.xx22.231107164034.p9h3/catalogue/l-t-labour-and-manpower-supplier-dahisar-west-mumbai-labour-contractors-5falo0j56j.jpg", title: 'Construction' },
    { id: 5, imgUrl: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/510968128CleaningTechnician.jpg=ws1280x960", title: 'Cleaning' },
    { id: 6, imgUrl: "https://static.vecteezy.com/system/resources/previews/030/596/704/large_2x/gardening-and-agriculture-concept-young-woman-farm-worker-gardening-flowers-in-garden-gardener-planting-flowers-for-bouquet-summer-gardening-work-girl-gardening-at-home-in-backyard-photo.jpg", title: 'Gardening' },
    { id: 7, imgUrl: "https://5.imimg.com/data5/ANDROID/Default/2022/4/SJ/LI/OB/148640419/product-jpeg-500x500.jpg", title: 'Driver' },
    { id: 8, imgUrl: "https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg?t=st=1726737993~exp=1726738593~hmac=7b7a2d504905b4917b2de44ac2da12b7f61f26c15d47b200e30c5af49315820e", title: 'Plumbing' },
    { id: 9, imgUrl: "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg", title: 'Electrical' },
    { id: 10, imgUrl: "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg", title: 'Carpentry' }
];

/**
 * ServiceCategorySection component that displays a horizontally scrollable list of service categories.
 * Includes navigation arrows for scrolling left and right.
 */
const ServiceCategorySection = () => {
    const scrollRef = useRef(null); // Ref for the scrollable container
    const { canScrollLeft, canScrollRight, scrollLeft, scrollRight } = useHorizontalScroll(scrollRef); // Custom hook to handle horizontal scrolling

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-light-violet">Service Categories</h2>
                <h3 className="text-xl font-bold cursor-pointer text-light-violet hover:underline">SEE ALL</h3>
            </div>

            <div className="relative px-10">
                {/* Left arrow for scrolling */}
                {canScrollLeft && (
                    <button className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full top-20 hover:bg-gray-300" onClick={scrollLeft}>
                        <FaArrowLeft />
                    </button>
                )}

                {/* Scrollable container */}
                <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar">
                    {serviceCategories.map((category) => (
                        <div key={category.id} className="flex-shrink-0 snap-start">
                            <ServiceCard imgUrl={category.imgUrl} title={category.title} altText={category.title} />
                        </div>
                    ))}
                </div>

                {/* Right arrow for scrolling */}
                {canScrollRight && (
                    <button className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full top-20 hover:bg-gray-300" onClick={scrollRight}>
                        <FaArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ServiceCategorySection;
