import React, { useEffect, useState } from 'react';
import BookingsCard from '../../reUsableComponents/BookingCard';
import bookings from '../../../utils/designUtils/bookingsData';
import ConfirmationModal from '../../reUsableComponents/ConfirmationModal';
import { getButtonDetails, mapStatus } from '../../../utils/designUtils/bookingStatusUtils';
import { useNavigate } from 'react-router-dom';

const ComplaintsPageUser = () => {
    // State to handle modal visibility and selected booking
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [complaints, setComplaints] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const complaint = bookings.filter((booking) => booking.complaint === 'requested' || booking.complaint === 'resolved');
        setComplaints(complaint);
    }, []); 

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
            const updatedBookings = complaints.filter(booking => booking.id !== selectedBooking.id);
            setComplaints(updatedBookings);
            console.log(`Complaint closed\nBooking-id: ${selectedBooking.id}`);
            closeModal();
        }
    };

    const handleButtonClick = (booking) => {
        navigate(`/booking-details/${booking.id}`)
        console.log(`Navigating to booking details page\nBooking_id: ${booking.id}\nProvider_id: ${booking.provider_id}`);
    };

    const handleViewClick = (providerId) => {
        navigate(`/provider-profile/${providerId}`)
        console.log(`Navigating to provider profile page\nProvider_id: ${providerId}`);
    };

    return (
        <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full max-w-screen-xl">
                {complaints.length === 0 ? (
                    <div className="col-span-full text-center p-4">
                        <p className="text-lg font-semibold">No bookings available.</p>
                        <p>Please check back later or create a new booking.</p>
                    </div>
                ) : (
                    complaints.map((booking, index) => {
                        const mappedStatus = mapStatus(booking.complaint);
                        const { text: buttonText, disabled: buttonDisabled } = getButtonDetails(mappedStatus);

                        return (
                            <BookingsCard
                                key={index}
                                serviceTitle={booking.title}
                                customerName={booking.providerName}
                                status={mappedStatus}
                                complaint={mappedStatus}
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

export default ComplaintsPageUser;
