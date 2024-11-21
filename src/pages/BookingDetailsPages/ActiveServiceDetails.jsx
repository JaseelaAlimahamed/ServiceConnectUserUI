import React, { useState, useEffect } from 'react'; 
import {useParams,useNavigate} from 'react-router-dom';
import ProfileInfo from '../../components/user/BookingDetailsComponents/ProfileInfo'; 
import BookingTitleDescription from '../../components/user/BookingDetailsComponents/BookingTitleDescription'; 
import ImageUploader from '../../components/user/BookingDetailsComponents/ImageUploader'; 
import AvailabilitySection from '../../components/user/BookingDetailsComponents/AvailabilitySection'; 
import CompleteButton from '../../components/user/BookingDetailsComponents/CompletedButton'; 
import InvoiceSummary from '../../components/user/BookingDetailsComponents/InvoiceSummary'; 
import CompletePaymentButton from '../../components/user/BookingDetailsComponents/CompletePaymentButton';
import ComplaintButton from '../../components/user/BookingDetailsComponents/ComplaintButton'; 
import { serviceRequestInvoice } from '../../services/userApiStore/UserApiStore';


const ActiveServiceDetails = () => {
    const [bookingDetails, setBookingDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id =useParams().id 
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchServiceDetails = async () => {


            try {
                
                const response =await serviceRequestInvoice(id);
                setBookingDetails(response)
            } catch (error) {
                setError(error.response ? error.response : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetails();
    }, [id]);

    
    const handleAcceptPayClick = () => {
        if (payment_status !== 'paid') {
            navigate(`/payment-methods/${id}`);
        } 
    };
    const profileData = {
        profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Nazrul Islam',
        jobTitle: 'Electrification'
    };

    if (loading) return <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">Loading...</div>;
    if (error) return <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">{error}</div>;

    const { service_request } = bookingDetails;
    if (!service_request) return <div>No data available</div>;
    
    const { image, booking_id, title, additional_notes, availability_from, availability_to, work_status } = service_request;
    const description = `Service: ${service_request.service}. Notes: ${additional_notes}`;
    const invoice = bookingDetails.invoice || null;
    const {payment_status} = bookingDetails.invoice || {};
    
        
    return (
        <div className="p-6 lg:ml-24 bg-light-gray min-h-screen">
            
            <ProfileInfo {...profileData} />
            <p className="text-medium-gray font-semibold text-sm mt-2 text-center">Booking Id: {booking_id}</p>
            <BookingTitleDescription  title={title} description={description}/>
            <ImageUploader image={image}/>
            <AvailabilitySection  availability_from={availability_from} availability_to={availability_to} />
            <CompleteButton work_status={work_status}/>
            {invoice && (
                <>
                    <InvoiceSummary invoice={invoice} />
                    <CompletePaymentButton onClick={handleAcceptPayClick} payment_status={payment_status}/>
                    <ComplaintButton />
                </> 
            )}
        </div>
    );
};

export default ActiveServiceDetails;