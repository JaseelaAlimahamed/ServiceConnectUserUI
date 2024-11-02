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
import axios from 'axios';
import { serviceRequestInvoice } from '../../services/userApiStore/UserApiStore';


const ActiveServiceDetails = () => {
    const [bookingDetails, setBookingDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id =useParams().id 
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchServiceDetails = async () => {

            // const url = 'http://127.0.0.1:8000/customer/service-request-invoice/';
            // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMzk1NDk0LCJpYXQiOjE3MzAzOTM2OTQsImp0aSI6IjI2ZjE0MmQwZWI2NjRjMGE4MWZkMWM4ZGE1NjYzNjA5IiwidXNlcl9pZCI6N30.Nl6q_zbJxQwMubLggD3JMKJHJAJbmN_EjHhOBWv6eRo';
        
            // const requestBody = {
            //     service_request_id: id, //change to 'id'
            // };

            try {
                
                // const response = await axios.post(url, requestBody, {
                //     headers: {
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${token}`,
                //     },
                // });
                // setBookingDetails(response.data);

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

    // const response={
    //     "service_request": {
    //         "title": "tty",
    //         "service": "food delivery",
    //         "work_status": "completed",
    //         "request_date": "2024-10-20T09:44:19.746525Z",
    //         "availability_from": "2024-10-05T14:30:00Z",
    //         "availability_to": "2024-10-06T14:30:00Z",
    //         "additional_notes": "service needed ",
    //         "image": null,
    //         "booking_id": "eadc699ffbf749e2b158ba76989839ad"
    //     },
    //     "invoice": {
    //         "invoice_ID": 8,
    //         "appointment_date": "2024-11-01T14:00:00Z",
    //         "quantity": 1,
    //         "price": 300.0,
    //         "total_amount": 300.0,
    //         "additional_requirements": "Need extra care for the service",
    //         "payment_status": "partially_paid"
    //     }
    // }

    //   const {image, booking_id, title, additional_notes, availability_from, availability_to, work_status } = response.service_request;
    //   const description = `Service: ${response.service_request.service}. Notes: ${additional_notes}`;
    //   const invoice = response.invoice || null;
    //   const {payment_status} = response.invoice ||{};

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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