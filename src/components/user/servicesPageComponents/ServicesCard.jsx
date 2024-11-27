import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const ServicesCard = ({ id, category, title, rating }) => {
    return (
        <div className="relative">
            <div className="flex items-stretch mb-4 bg-white shadow-2xl h-36 sm:h-40 md:h-44 lg:h-44 rounded-2xl text-dark-gray">
                <div className="w-1/4 h-full bg-black rounded-l-2xl"></div>
                <div className="flex-grow mt-2 ml-4">
                    <p className="my-2 text-sm font-semibold text-orange-500">{category}</p>
                    <p className="text-lg font-bold truncate">{title}</p>
                    <div className="flex items-center mt-2 text-sm font-bold">
                        <span>⭐ {rating}</span>
                    </div>
                </div>
                <div className="absolute right-5 -top-2">
                    <AiFillCheckCircle className="text-green-600" size={24} aria-label="Completed" />
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default ServicesCard;
