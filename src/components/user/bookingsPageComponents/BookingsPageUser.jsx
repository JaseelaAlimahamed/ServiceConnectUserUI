import React, { useState } from 'react';
import BookingsCard from '../../reUsableComponents/BookingCard';
import bookings from '../../../utils/designUtils/bookingsData';
import ConfirmationModal from '../../reUsableComponents/ConfirmationModal';
import { getButtonDetails, mapStatus } from '../../../utils/designUtils/bookingStatusUtils';
import { useNavigate } from 'react-router-dom';

const BookingsPageUser = () => {
    // State to handle modal visibility and selected booking
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [bookingsData, setBookingsData] = useState(bookings);
    const navigate = useNavigate();

    // Open modal handler
    const openModal = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    // Close modal handler
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };

    // Confirm deletion 
    const handleConfirmClose = () => {
        if (selectedBooking) {
            const updatedBookings = bookingsData.filter(booking => booking.id !== selectedBooking.id);
            setBookingsData(updatedBookings);
            console.log(`Booking closed\nBooking_id: ${selectedBooking.id}`);
            closeModal();
        }
    };

    const handleButtonClick = (booking) => {
        navigate(`/booking-details/${booking.id}`)
        console.log(`Navigating to booking details page\nBooking_id: ${booking.id}\nProvider_id: ${booking.provider_id}\n details: ${booking.status}`);
    };

    const handleViewClick = (providerId) => {
        navigate(`/provider-profile/${providerId}`)
        console.log(`Navigating to provider profile page\nProvider_id: ${providerId}`);
    };

    return (
        <div className='min-h-screen bg-light-gray flex items-center flex-col p-4'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full max-w-screen-xl">
                {bookingsData.length === 0 ? (
                    <div className="col-span-full text-center p-4">
                        <p className="text-lg font-semibold">No bookings available.</p>
                        <p>Please check back later or create a new booking.</p>
                    </div>
                ) : (
                    bookingsData.map((booking, index) => {
                        // Get the status and button details for each booking
                        const mappedStatus = mapStatus(booking.status);
                        const { text: buttonText, disabled: buttonDisabled } = getButtonDetails(mappedStatus);

                        return (
                            <BookingsCard
                                key={index}
                                serviceTitle={booking.title}
                                customerName={booking.providerName}
                                status={mappedStatus}
                                additional_requirements={booking.additional_requirements}
                                amount={booking.amount}
                                date={booking.availabilityFrom}
                                time={`${booking.timeFrom} - ${booking.timeTo}`}
                                openModal={() => openModal(booking)}
                                onButtonClick={() => handleButtonClick(booking)}
                                onClickView={handleViewClick}
                                buttonText={buttonText}
                                buttonDisabled={buttonDisabled}
                                providerId={booking.provider_id}
                            />
                        );
                    })
                )}
            </div>
            {/* Confirmation Modal */}
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
