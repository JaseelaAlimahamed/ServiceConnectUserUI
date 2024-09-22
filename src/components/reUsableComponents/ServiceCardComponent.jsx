import React from 'react';

/**
 * ServiceCard component to display individual service information.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.category - The service category (e.g., Plumbing, Electrical).
 * @param {string} props.serviceTitle - The title of the service.
 * @param {number} props.price - The price of the service.
 * @param {number} props.rating - The rating of the service.
 * @param {number} props.reviews - The number of reviews the service has received.
 * @param {string} props.imgUrl - The URL for the service image (default: placeholder).
 * @param {string} props.className - Additional custom class names (optional).
 * 
 * @returns {JSX.Element} The rendered ServiceCard component.
 */
const ServiceCard = ({
    category,
    serviceTitle,
    price,
    rating,
    reviews,
    imgUrl = 'https://via.placeholder.com/200', // Default image placeholder
    className = '' // Optional custom class
}) => {
    return (
        <div className={`overflow-hidden bg-white shadow-md rounded-xl ${className}`}>
            {/* Service Image */}
            <div className="bg-black h-1/2">
                <img
                    src={imgUrl}
                    alt={serviceTitle}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Service Information */}
            <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                    {/* Service Category */}
                    <p className="text-sm font-semibold text-gray-500">{category}</p>

                    {/* Bookmark Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="text-gray-500"
                        viewBox="0 0 24 24"
                    >
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            <path d="M9 10l2 2 4-4" />
                        </g>
                    </svg>
                </div>

                {/* Service Title */}
                <h3 className="mb-2 text-sm font-bold text-gray-800">{serviceTitle}</h3>

                {/* Price, Rating, and Reviews */}
                <div className="flex items-center">
                    {/* Price */}
                    <p className="mr-2 text-sm font-bold">${price}</p>
                    <span className="font-bold">|</span>

                    {/* Rating */}
                    <div className="flex items-center mx-2">
                        <span className="mr-1 text-yellow-400">★</span>
                        <p className="text-sm font-bold text-gray-800">{rating}</p>
                    </div>
                    <span className="font-bold">|</span>

                    {/* Reviews */}
                    <p className="ml-2 text-sm font-bold text-gray-800">{reviews}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
