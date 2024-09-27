import React from 'react';

/**
 * ServiceCard component to display an image and title, typically used for category or service display.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.imgUrl - The URL of the image to be displayed.
 * @param {string} props.title - The title or name of the service/category.
 * @param {string} props.altText - The alt text for the image.
 * 
 * @returns {JSX.Element} The rendered ServiceCard component.
 */
const ServiceCard = ({ imgUrl, title, altText }) => {


  return (
    <div className="w-[120px] h-[128px] flex flex-col items-center text-center">
      {/* Image Container */}
      <div className="w-[97px] h-[87px] border-[3px] border-dark-gray rounded-3xl p-[4px]">
        <img className="w-full h-full rounded-3xl" src={imgUrl} alt={altText} />
      </div>

      {/* Title/Name of the Service */}
      <h6 className="font-semibold text-dark-violet">{title}</h6>
    </div>
  );
};

export default ServiceCard;
