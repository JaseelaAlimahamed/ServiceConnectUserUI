import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileInfo from '../../components/user/BookingDetailsComponents/ProfileInfo';
import BookingTitleDescription from '../../components/user/BookingDetailsComponents/BookingTitleDescription';
import ImageUploader from '../../components/user/BookingDetailsComponents/ImageUploader';
import AvailabilitySection from '../../components/user/BookingDetailsComponents/AvailabilitySection';
import CompleteButton from '../../components/user/BookingDetailsComponents/CompletedButton';
import InvoiceSummary from '../../components/user/BookingDetailsComponents/InvoiceSummary';
import CompletePaymentButton from '../../components/user/BookingDetailsComponents/CompletePaymentButton';
import ComplaintButton from '../../components/user/BookingDetailsComponents/ComplaintButton';
import { fetchServiceRequest } from '../../services/api/activeServiceAPI';

const ActiveServiceDetails = () => {
    const [bookingDetails, setBookingDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        const getServiceDetails = async () => {
            try {
                const data = await fetchServiceRequest(id);
                setBookingDetails(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        getServiceDetails();
    }, [id]);

    const { availability_from, availability_to } = bookingDetails;
    const fromDate = availability_from ? new Date(availability_from).toLocaleDateString() : '';
    const fromTime = availability_from ? new Date(availability_from).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    const toDate = availability_to ? new Date(availability_to).toLocaleDateString() : '';
    const toTime = availability_to ? new Date(availability_to).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

    const handleAcceptPayClick = () => {
        navigate(`/payment-methods/${id}`);
    };

    if (loading) {
        return <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 lg:ml-12 bg-light-gray min-h-screen text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
            <ProfileInfo
                profileImage={bookingDetails.image || 'N/A'}
                name={bookingDetails.service_provider_name || 'N/A'}
                jobTitle={bookingDetails.subcategory_title || 'N/A'}
                bookingId={bookingDetails.booking_id || 'N/A'}
                workStatus={bookingDetails.work_status}
                acceptanceStatus={bookingDetails.acceptance_status}
            />

            <BookingTitleDescription
                title={bookingDetails.title || 'No Title Available'}
                description={bookingDetails.additional_notes || 'No Description Available'}
            />

            <ImageUploader image={bookingDetails.image} />

            <AvailabilitySection fromDate={fromDate} fromTime={fromTime} toDate={toDate} toTime={toTime} />

            <CompleteButton />

            <InvoiceSummary />

            <CompletePaymentButton onClick={handleAcceptPayClick} />

            <ComplaintButton bookingId={bookingDetails.booking_id} />
        </div>
    );
};

export default ActiveServiceDetails;
