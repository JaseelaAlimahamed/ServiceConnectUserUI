import { FaHeart, FaStar } from 'react-icons/fa';

const ReviewCard = ({ reviews }) => {
    return (
        <div>
            {reviews?.map((review, index) => (
                <div key={index} className="mt-6">
                    <div className="flex items-start p-6 space-x-4 bg-white shadow-lg rounded-xl">

                        {/* Avatar */}
                        <img
                            src={review.avatar}
                            alt={`${review.name}'s avatar`}
                            className="w-12 h-12 rounded-full"
                        />

                        <div className="flex-1">
                            {/* Name and Rating */}
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg font-bold text-dark-gray">{review.name}</h4>

                                {/* Rating */}
                                <div className="flex items-center px-2 py-1 border-2 border-blue-500 rounded-full">
                                    <FaStar className="text-yellow-500" aria-label="Rating" />
                                    <span className="ml-1 font-semibold">{review.rating}</span>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="mt-2 text-sm font-semibold text-gray-600">{review.review}</p>

                            {/* Likes and Time */}
                            <div className="flex items-center mt-4 space-x-4 text-sm font-bold text-dark-gray">
                                <div className="flex items-center space-x-1">
                                    <FaHeart className="text-red-500" aria-label="Likes" />
                                    <span className="">{review.likes}</span>
                                </div>
                                <span>{review.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewCard;
