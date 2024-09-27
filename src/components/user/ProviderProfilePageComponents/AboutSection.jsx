import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AboutSection = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const getTruncatedDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        // Truncate without cutting off in the middle of a word
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(' '))) + '...';
    };

    const shouldShowReadMore = description.length > 300;

    return (
        <section className="p-4 mt-4 bg-white shadow-md rounded-2xl">
            {/* Title */}
            <h3 className="mb-2 text-lg font-bold">About</h3>

            {/* Description */}
            <div className="font-semibold text-gray-600">
                <p className="leading-relaxed">
                    {isExpanded || !shouldShowReadMore
                        ? description
                        : getTruncatedDescription(description, 300)}
                </p>
                {shouldShowReadMore && (
                    <p className="mt-2 leading-relaxed">
                        <button
                            onClick={toggleReadMore}
                            className="underline text-dark-gray focus:outline-none"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </p>
                )}
            </div>
        </section>
    );
};

AboutSection.propTypes = {
    description: PropTypes.string.isRequired,
};

export default AboutSection;
