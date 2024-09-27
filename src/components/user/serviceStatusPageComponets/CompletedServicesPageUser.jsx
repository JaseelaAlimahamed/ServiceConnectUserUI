import React, { useEffect, useState } from 'react';
import BookingsCard from '../../reUsableComponents/BookingCard';
import bookings from '../../../utils/bookings/bookingsData';
import ConfirmationModal from '../../reUsableComponents/ConfirmationModal';
import { getButtonDetails, mapStatus } from '../../../utils/bookings/bookingStatusUtils';
import {useNavigate } from 'react-router-dom';
import StatusTabs from './StatusTabs';


const CompletedServicesPageUser = () => {
    // State to handle modal visibility and selected booking
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [activeTab, setActiveTab] = useState('completed');
    const navigate = useNavigate();

    useEffect(() => {
        const ongoingBookings = bookings.filter((booking) => booking.job === 'completed');
        setFilteredBookings(ongoingBookings);
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
            const updatedBookings = filteredBookings.filter(booking => booking.id !== selectedBooking.id);
            setFilteredBookings(updatedBookings);
            closeModal();
            console.log(`service closed\nBooking_id: ${selectedBooking.id}`);
        }
    };

    const handleButtonClick = (booking) => {
        navigate(`/booking_details/${booking.id}`)
        console.log(`Navigating to booking details page\nBooking_id: ${booking.id}\nProvider_id: ${booking.provider_id}`);
    };

    const handleViewClick = (providerId) => {
        navigate(`/provider_profile/${providerId}`)
        console.log(`Navigating to provider profile page\nProvider_id: ${providerId}`);
    };

    return (
        <div className='min-h-screen bg-light-gray flex items-center flex-col p-4'>
            <StatusTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-xl">
                {filteredBookings.length === 0 ? (
                    <div className="col-span-full text-center p-4">
                        <p className="text-lg font-semibold">No bookings available.</p>
                        <p>Please check back later or create a new booking.</p>
                    </div>
                ) : (
                    filteredBookings.map((booking, index) => {
                        const mappedStatus = mapStatus(booking.job);
                        const { text: buttonText, disabled: buttonDisabled } = getButtonDetails(mappedStatus);

                        return (
                            <BookingsCard
                                key={index}
                                serviceTitle={booking.title}
                                customerName={booking.providerName}
                                status={mappedStatus}
                                job={mappedStatus}
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

export default CompletedServicesPageUser;
