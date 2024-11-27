import React, { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import BookingTitleDescription from '../../components/user/bookingDetailsComponents/BookingTitleDescription';
import AvailabilitySection from '../../components/user/bookingDetailsComponents/AvailabilitySection';
import RescheduleButton from '../../components/user/bookingDetailsComponents/RescheduleButton';
import InvoiceSummary from '../../components/user/bookingDetailsComponents/InvoiceSummary';
import AcceptPayButton from '../../components/user/bookingDetailsComponents/AcceptPayButton';
import ImageUploader from '../../components/user/bookingDetailsComponents/ImageUploader';
import ProfileInfo from '../../components/user/bookingDetailsComponents/ProfileInfo';


const BookingDetails = () => {
  const [bookingDetails, setBookingDetails] = useState({}); 
  const [uploadedImages, setUploadedImages] = useState([]);
const id =useParams().id
 const navigate = useNavigate();

  const handleInputChange = (value, fieldName) => {
    console.log('Input changed:', fieldName, value);
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleImagesUploaded = (images) => {
    setUploadedImages(images);
    console.log('Images uploaded:', images);
  };

  const handleAcceptPayClick = () => {
    // Navigate to /payment-methods with the extracted id
    navigate(`/payment-methods/${id}`);
  };

  return (
    <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">
      <ProfileInfo
        profileImage="https://randomuser.me/api/portraits/men/32.jpg"
        name="Nazrul Islam"
        jobTitle="Electrification"
        bookingId="12aa21w"
      />
      <BookingTitleDescription onInputChange={handleInputChange} />
      <ImageUploader onImagesUploaded={handleImagesUploaded} />
      <AvailabilitySection onInputChange={handleInputChange} />
      <RescheduleButton isActive={Object.keys(bookingDetails).length > 0 || uploadedImages.length > 0} /> 
      <InvoiceSummary />
      <AcceptPayButton onClick={handleAcceptPayClick} />
    </div>
  );
};

export default BookingDetails;