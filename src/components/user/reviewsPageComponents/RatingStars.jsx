
const RatingStars = ({ rating }) => {
    // Clamp rating between 0 and 5
    const clampedRating = Math.max(0, Math.min(5, rating));

    // Calculate the number of full stars, half stars, and empty stars
    const fullStars = Math.floor(clampedRating);
    const hasHalfStar = clampedRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Determine the color based on rating (optional)
    const getColor = () => {
        if (clampedRating >= 4) return '#FFC107'; // Gold
        if (clampedRating >= 3) return '#FF9800'; // Orange
        return '#F44336'; // Red
    };

    const starColor = getColor();

    const Star = ({ filled, half }) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={filled ? starColor : 'none'}
            stroke={starColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {half ? (
                <defs>
                    <linearGradient id="half">
                        <stop offset="50%" stopColor={starColor} />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            ) : null}
            <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 
          7 14.14 2 9.27 8.91 8.26 12 2"
                fill={half ? 'url(#half)' : filled ? starColor : 'none'}
            />
        </svg>
    );

    return (
        <div className="flex items-center space-x-1">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <Star key={`full-${index}`} filled />
            ))}

            {/* Half star */}
            {hasHalfStar && <Star key="half" half />}

            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <Star key={`empty-${index}`} />
            ))}
        </div>
    );
};

export default RatingStars;
