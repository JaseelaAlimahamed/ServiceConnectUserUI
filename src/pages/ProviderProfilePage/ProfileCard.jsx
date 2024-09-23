import React from 'react';
import PropTypes from 'prop-types';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const ProfileCard = ({
    distance,
    rating,
    reviews,
    name,
    occupation,
    mediaCount,
    servicesListed,
}) => {
    return (
        <section className="rounded-lg">
            {/* Profile Info Card */}
            <div className="p-4 mt-6 font-bold bg-white shadow-lg rounded-2xl md:flex md:items-center md:justify-between">
                {/* Distance and Rating */}
                <div className="flex items-center justify-between space-x-4 md:block md:space-x-0 md:space-y-2">
                    <div className="text-sm text-orange-500 md:text-base">
                        {distance} km away
                    </div>
                    <div className="flex items-center text-sm text-black md:text-base md:mt-2">
                        <FaStar className="mr-1 text-yellow-500" />
                        <span>{rating}</span>
                        <span className="mx-1 text-gray-400">|</span>
                        <span>{reviews} Reviews</span>
                    </div>
                </div>

                {/* Name and Occupation */}
                <div className="mt-4 md:mt-0 md:text-center">
                    <h2 className="text-xl font-bold md:text-2xl">{name}</h2>
                    <p className="text-sm text-gray-500 md:text-lg">{occupation}</p>
                </div>

                {/* Service Info */}
                <div className="flex items-center mt-4 md:mt-0 md:flex-col md:items-end md:space-y-2">
                    <div className="flex items-center">
                        <BiCameraMovie className="mr-1 text-2xl" />
                        <span className="text-sm md:text-base">
                            {mediaCount} Videos & Images
                        </span>
                        <span className="mx-1 text-gray-400">|</span>
                    </div>
                    <div className="flex items-center">
                        <AiOutlineClockCircle className="mr-1 text-2xl" />
                        <span className="text-sm md:text-base">
                            {servicesListed} Services Listed
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

ProfileCard.propTypes = {
    distance: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    mediaCount: PropTypes.number.isRequired,
    servicesListed: PropTypes.number.isRequired,
};

export default ProfileCard;
