// import React from "react";
import { FiBookmark } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

const DeliveryPersonCard = ({
  name,
  price,
  rating,
  reviews,
  distance,
  booked,
}) => {
  return (
    <div className="bg-primary rounded-lg h-32 shadow-md m-4 flex">
      {/* Avatar Placeholder */}
      <div className="imgSection">
        <div className="w-28 h-full rounded-tl-[8px] rounded-bl-[8px] bg-black "></div>
      </div>
      <div className="contentSection p-4 flex-1">
        {/* Delivery Info */}
        <div className="flex justify-between">
        <p className="text-sm font-semibold text-[#FF6B00]">{distance} km away</p>
        {/* Bookmark or Booked */}
      <div className="ml-4   ">
        {booked ? (
         <FiBookmark className="text-green-500"/>
         
        ) : (
          <FiBookmark className="text-gray-500" />
        )}
      </div>
        </div>
        
        <div className="flex-col">
          <div>
            <h2 className="text-lg font-bold text-[#202244]">{name}</h2>
            <p className="text-xl font-bold text-dark-gray-500">{price}</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#202244]">
            <FaStar className="text-yellow-500" />
            <span>{rating}</span>

            <span> | {reviews} reviews</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DeliveryPersonCard;
