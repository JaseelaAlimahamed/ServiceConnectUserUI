import React, { useState } from 'react'; 
import {useParams,useNavigate} from 'react-router-dom';
import ProfileInfo from '../../components/user/BookingDetailsComponents/ProfileInfo'; 
import BookingTitleDescription from '../../components/user/BookingDetailsComponents/BookingTitleDescription'; 
import ImageUploader from '../../components/user/BookingDetailsComponents/ImageUploader'; 
import AvailabilitySection from '../../components/user/BookingDetailsComponents/AvailabilitySection'; 
import CompleteButton from '../../components/user/BookingDetailsComponents/CompletedButton'; 
import InvoiceSummary from '../../components/user/BookingDetailsComponents/InvoiceSummary'; 
import CompletePaymentButton from '../../components/user/BookingDetailsComponents/CompletePaymentButton';
import ComplaintButton from '../../components/user/BookingDetailsComponents/ComplaintButton'; 


const ActiveServiceDetails = () => {
    const [bookingDetails, setBookingDetails] = useState({});
    const [uploadedImages, setUploadedImages] = useState([]);

    const id =useParams().id
 const navigate = useNavigate();

    // Handle input change for form fields and custom components
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
        <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
            <ProfileInfo
                profileImage="https://randomuser.me/api/portraits/men/32.jpg"
                name="Nazrul Islam"
                jobTitle="Electrification"
                bookingId="12aa21w"
            />
            <BookingTitleDescription onInputChange={handleInputChange} />
            <ImageUploader onImagesUploaded={handleImagesUploaded} />
            <AvailabilitySection onInputChange={handleInputChange} />
            <CompleteButton />
            <InvoiceSummary />
            <CompletePaymentButton onClick={handleAcceptPayClick}/>
            <ComplaintButton />
        </div>
    );
};

export default ActiveServiceDetails;