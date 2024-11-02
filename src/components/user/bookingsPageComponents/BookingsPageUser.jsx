import React, { useEffect, useState } from 'react';
import BookingsCard from '../../reUsableComponents/BookingCard';
import ConfirmationModal from '../../reUsableComponents/ConfirmationModal';
import { getButtonDetails, mapStatus } from '../../../utils/bookings/bookingStatusUtils';
import { useNavigate } from 'react-router-dom';
import { viewRequestUser } from '../../../services/userApiStore/UserApiStore'; 

const BookingsPageUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [bookingsData, setBookingsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await viewRequestUser();
                console.log("API response data:", data); 
                setBookingsData(data);
            } catch (err) {
                console.error("Error fetching bookings:", err);
                setError("Failed to load bookings.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const openModal = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };

    const handleConfirmClose = () => {
        if (selectedBooking) {
            const updatedBookings = bookingsData.filter(booking => booking.id !== selectedBooking.id);
            setBookingsData(updatedBookings);
            closeModal();
        }
    };

    const handleButtonClick = (booking) => {
        navigate(`/booking-details/${booking.id}`);
    };

    const handleViewClick = (providerId) => {
        navigate(`/provider-profile/${providerId}`);
    };

    return (
        <div className='min-h-screen bg-light-gray flex items-center flex-col p-4'>
            {loading ? (
                <p>Loading bookings...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : bookingsData.length === 0 ? (
                <div className="text-center p-4">
                    <p className="text-lg font-semibold">No bookings available.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full max-w-screen-xl">
                    {bookingsData.map((booking) => {
                        const mappedStatus = mapStatus(booking.acceptance_status); 
                        const { text: buttonText, disabled: buttonDisabled } = getButtonDetails(mappedStatus);

                        return (
                            <BookingsCard
                                key={booking.id} 
                                serviceTitle={booking.title}
                                customerName={booking.providerName}
                                status={mappedStatus}
                                additional_requirements={booking.additional_requirements}
                                amount={booking.amount}
                                date={booking.availability_from} 
                                time={`${booking.availability_to}`} 
                                openModal={() => openModal(booking)}
                                onButtonClick={() => handleButtonClick(booking)}
                                onClickView={() => handleViewClick(booking.provider_id)}
                                buttonText={buttonText}
                                buttonDisabled={buttonDisabled}
                                providerId={booking.provider_id}
                            />
                        );
                    })}
                </div>
            )}
            {isModalOpen && (
                <ConfirmationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onConfirm={handleConfirmClose}
                />
            )}
        </div>
    );
};

export default BookingsPageUser;
