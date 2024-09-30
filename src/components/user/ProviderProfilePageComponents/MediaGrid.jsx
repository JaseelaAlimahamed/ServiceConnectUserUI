import React from 'react';
import PropTypes from 'prop-types';
import { MdVideocam } from 'react-icons/md';

const MediaGrid = ({ title, mediaItems, type }) => {
    return (
        <section className="p-4 mt-4 bg-white shadow-md rounded-2xl">
            {/* Title */}
            <h3 className="mb-4 text-lg font-bold text-dark-gray">{title}</h3>

            {/* Grid of Media Items */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {mediaItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-32 overflow-hidden rounded-md"
                    >
                        {type === 'image' ? (
                            <img
                                src={item.url}
                                alt={item.alt || `${title} ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gray-200">
                                {/* Replace with video thumbnail if available */}
                                <MdVideocam
                                    className="text-5xl text-gray-500"
                                    aria-label="Video"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

MediaGrid.propTypes = {
    title: PropTypes.string.isRequired,
    mediaItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    type: PropTypes.oneOf(['image', 'video']).isRequired,
};

export default MediaGrid;
