import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdArrowForward } from 'react-icons/md';
import { FaHeart, FaStar } from 'react-icons/fa';


const ReviewsSection = ({ reviews, id }) => {
    return (
        <section className="p-4 mt-4 bg-white shadow-md rounded-2xl text-dark-gray">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Reviews</h3>
                <Link to={`/reviews/${id}`} className="flex items-center text-sm font-bold">
                    SEE ALL <MdArrowForward className="ml-1 text-lg font-bold" />
                </Link>
            </div>

            {/* List of Reviews */}
            <ul className="mt-4 space-y-6">
                {reviews.map((review, index) => (
                    <li key={index} className="flex space-x-4">
                        {/* Avatar */}
                        <img
                            src={review.avatar}
                            alt={`${review.name}'s avatar`}
                            className="w-10 h-10 rounded-full"
                        />

                        <div className="flex-1">
                            {/* Name and Rating */}
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">{review.name}</h4>
                                <div className="flex items-center px-2 py-1 border-2 border-blue-500 rounded-full">
                                    <FaStar className="text-yellow-500" aria-label="Rating" />
                                    <span className="ml-1 font-semibold">{review.rating}</span>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="mt-1 text-sm font-semibold text-gray-600">{review.review}</p>

                            {/* Likes and Time */}
                            <div className="flex items-center mt-2 space-x-4 text-sm">
                                <div className="flex items-center space-x-1">
                                    <FaHeart className="text-red-500" aria-label="Likes" />
                                    <span className="font-bold">{review.likes}</span>
                                </div>
                                <span className="font-bold">{review.time}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

ReviewsSection.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({

            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            review: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ReviewsSection;
