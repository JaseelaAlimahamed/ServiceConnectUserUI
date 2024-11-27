import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const BannerSlider = ({ bannerData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrevious,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="relative w-full h-full bg-dark-gray rounded-3xl max-w-full px-1 my-8 overflow-hidden" {...swipeHandlers}>
            {/* Banner Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[28rem]">
                <img
                    src={bannerData[currentIndex].imgUrl}
                    alt="Banner"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Banner Text */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 text-white">
                <div className="space-y-2">
                    <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
                        {bannerData[currentIndex].discount}
                    </h1>
                    <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold">
                        {bannerData[currentIndex].title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-lg lg:text-xl">
                        {bannerData[currentIndex].description}
                    </p>
                </div>
                <div className="mt-4 text-sm font-bold cursor-pointer hover:underline">
                    SEE ALL
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {bannerData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-500'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
