import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import RatingStars from './RatingStars';

const ReviewSection = () => {
    // State to store the reviews data and loading state
    const [reviewsData, setReviewsData] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading
    const [filter, setFilter] = useState('All');
    const [visibleReviews, setVisibleReviews] = useState(10);
    const id = "121212"


    const navigate = useNavigate();

    const handleReviewClick = () => {
      // Navigate to /review-submit/:id
      navigate(`/review-submit/${id}`);
    };


    // Simulate API call to fetch reviews data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching data

            // Simulate a network delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Import the reviews data from the separate file
            const data = await import('./mockData/reviewsData');
            setReviewsData(data.default);

            setLoading(false);
        };

        fetchData();
    }, []);

    // Filter reviews based on the selected rating
    const filteredReviews = reviewsData.filter((review) => {
        if (filter === 'Excellent') return review.rating >= 4.5;
        if (filter === 'Good') return review.rating >= 3.5 && review.rating < 4.5;
        if (filter === 'Average') return review.rating >= 2.5 && review.rating < 3.5;
        if (filter === 'Below Average') return review.rating < 2.5;
        return true;
    });

    // Infinite scroll logic
    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (bottom && visibleReviews < filteredReviews.length) {
                setVisibleReviews((prevVisible) => prevVisible + 10);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleReviews, filteredReviews]);

    // Calculate the average rating
    const calculateAverageRating = () => {
        if (reviewsData.length === 0) return 0;
        const totalRating = reviewsData.reduce((acc, review) => acc + review.rating, 0);
        return (totalRating / reviewsData.length).toFixed(1);
    };

    // Toggle filter selection
    const handleFilterClick = (filterName) => {
        if (filter === filterName) {
            setFilter('All');
        } else {
            setFilter(filterName);
        }
        setVisibleReviews(10);
    };

    // Display the loading state
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="relative  max-w-screen-xl py-8 px-12 mx-auto bg-light-gray">
            <div className="flex flex-col items-center gap-3 mb-3">
                <h2 className="text-4xl font-bold">{calculateAverageRating()}</h2>
                <RatingStars rating={calculateAverageRating()} />
                <p className="font-semibold text-gray-500">Based on {reviewsData.length} Reviews</p>
            </div>
            <div className="flex justify-center mb-4 font-semibold">
                <button
                    onClick={() => handleFilterClick('Excellent')}
                    className={`px-4 py-2 mr-2 shadow-lg  ${filter === 'Excellent' ? 'bg-dark-gray text-white' : 'bg-white'
                        } rounded-full`}
                >
                    Excellent
                </button>
                <button
                    onClick={() => handleFilterClick('Good')}
                    className={`px-4 py-2 mr-2 shadow ${filter === 'Good' ? 'bg-dark-gray text-white' : 'bg-white'
                        } rounded-full`}
                >
                    Good
                </button>
                <button
                    onClick={() => handleFilterClick('Average')}
                    className={`px-4 py-2 mr-2 shadow ${filter === 'Average' ? 'bg-dark-gray text-white' : 'bg-white'
                        } rounded-full`}
                >
                    Average
                </button>
                <button
                    onClick={() => handleFilterClick('Below Average')}
                    className={`px-4 py-2 shadow ${filter === 'Below Average' ? 'bg-dark-gray text-white' : 'bg-white'
                        } rounded-full`}
                >
                    Below Average
                </button>
            </div>
            {/* Display the filtered reviews and show only the number of reviews specified by visibleReviews */}
            <ReviewCard reviews={filteredReviews.slice(0, visibleReviews)} />
            {visibleReviews >= filteredReviews.length && (
                <div className="mt-4 text-center text-gray-500">No more reviews to show</div>
            )}
            {/* Adjusted Write a Review Button */}
            <div className="fixed left-0 right-0 z-50 flex justify-center bottom-4">
                <div className="flex justify-center w-full max-w-screen-lg mx-auto">
                    <button
                        className="w-[80%] px-6 py-3 text-white rounded-full bg-dark-gray"
                        onClick={handleReviewClick}
                    >
                        Write a Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
