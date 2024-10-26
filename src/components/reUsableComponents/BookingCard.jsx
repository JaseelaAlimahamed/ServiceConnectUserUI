import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsExclamationOctagonFill } from 'react-icons/bs';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { getStatusColor } from '../../utils/bookings/bookingStatusUtils';

const BookingsCard = ({
  serviceTitle,
  customerName,
  status,
  job,
  complaint,
  amount,
  additional_requirements,
  date,
  time,
  onClickView,
  openModal,
  buttonText,
  buttonDisabled,
  onButtonClick,
  providerId
}) => {
  const mappedStatus = status;

  return (
    <div className="relative bg-white rounded-3xl shadow-md w-full p-6 min-w-lg mx-auto">
      {/* Left color bar based on status */}
      <div className={`absolute top-0 left-0 h-full w-5 rounded-l-3xl ${getStatusColor(mappedStatus)}`}></div>

      {/* Top section with service title, view button, and close icon */}
      <div className="flex justify-between items-center ml-4">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-bold text-xl text-indigo-900">{serviceTitle}</h3>
          <span className="text-xs underline font-medium cursor-pointer" onClick={() => onClickView(providerId)}>
            View
          </span>
        </div>
        {/* Close icon */}
        <button className="p-0 bg-transparent text-gray-400 focus:outline-none" onClick={openModal}>
          <AiOutlineClose className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Customer details */}
      <div className="flex items-center ml-4">
        <img src='/profileImage.svg' className="w-7 h-7 rounded-full mr-2" alt="Profile" />
        <h4 className="text-gray-400">{customerName}</h4>
      </div>
      <div className="ml-4">
        <span className="text-gray-400">{mappedStatus}</span>
      </div>

      {/* Date and time details */}
      <div className="flex justify-between items-center text-gray-400 ml-4">
        <div className="flex items-center">
          <FaRegCalendarAlt className="w-5 h-5 mr-2 text-orange-500" />
          {date}
        </div>
        <div className="flex items-center">
          <FaRegClock className="w-5 h-5 mr-2 text-yellow-500 ml-1" />
          {time}
        </div>
      </div>

      {/* Display amount and additional requirements */}
      {mappedStatus === 'Scheduled' || job === 'Active' || (complaint === 'Pending' || complaint === 'Resolved') ? (
        <div className="flex items-center text-gray-400 ml-4">
          <span>Amount: {amount} /-</span>
          {additional_requirements && (
            <div className="flex items-center ml-3 relative group">
              <BsExclamationOctagonFill className="w-6 h-5 text-red-500 mr-2" />
              <span className="text-red-500 text-xs">Additional Requirements</span>
              <div className="absolute bottom-full mb-2 left-0 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {additional_requirements}
              </div>
            </div>
          )}
        </div>
      ) : null}


      {/* Button Component */}
      <div className="mt-4 ml-4 text-center">
        <button
          className={`${getStatusColor(mappedStatus)} ${buttonDisabled ? 'cursor-not-allowed' : ''} text-white px-4 text-xs shadow-xl rounded-full focus:outline-none focus:ring-0 flex items-center justify-center relative`}
          style={{ width: '100%' ,height : '25px' }}
          disabled={buttonDisabled}
          onClick={onButtonClick}
        >
          <span className="flex items-center  mx-auto" style={{ width: '100%' ,height : '25px' }}>
            {buttonText}
            {!buttonDisabled && job !== 'Active' && complaint !== 'Pending' ? (<BiChevronDown className="w-6 h-18 absolute right-4" aria-hidden="true" />) : null}
          </span>
          {!buttonDisabled && <img src="./buttonArrow.svg" className="w-6 h-18 absolute right-4" alt="arrow" />}
        </button>
      </div>
    </div>
  );
};

export default BookingsCard;
