import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

/**
 * BannerSlider component that displays a swipable banner with discount offers.
 * The user can swipe or click to navigate between banners.
 */
const BannerSlider = ({ bannerData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next banner
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    };

    // Function to move to the previous banner
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
        );
    };

    // Handling swipes for mobile and desktop using react-swipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrevious,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Enable swipe via mouse as well
    });

    return (
        <div
            className="relative mx-auto my-8 overflow-hidden text-white rounded-3xl bg-dark-gray max-w-7xl"
            {...swipeHandlers}
        >
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <img
                    src={bannerData[currentIndex].imgUrl}
                    alt="Banner Placeholder"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 lg:px-16">
                <div className="text-white">
                    <h1 className="text-2xl font-bold md:text-4xl">
                        {bannerData[currentIndex].discount}
                    </h1>
                    <h2 className="mt-2 text-xl font-semibold md:text-3xl">
                        {bannerData[currentIndex].title}
                    </h2>
                    <p className="mt-4 text-sm md:text-lg">
                        {bannerData[currentIndex].description}
                    </p>
                </div>

                {/* SEE ALL Button */}
                <div className="text-sm font-bold cursor-pointer hover:underline">
                    SEE ALL
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {bannerData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
