import React, { useEffect, useState } from 'react';
import BookingsCard from '../../reUsableComponents/BookingCard';
import bookings from '../../../utils/bookings/bookingsData';
import ConfirmationModal from '../../reUsableComponents/ConfirmationModal';
import { getButtonDetails, mapStatus } from '../../../utils/bookings/bookingStatusUtils';
import {useNavigate } from 'react-router-dom';
import StatusTabs from './StatusTabs';
import axios from '../../../api/axios';


const CompletedServicesPageUser = () => {
    // State to handle modal visibility and selected booking
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [completedServices, setCompletedServices] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [activeTab, setActiveTab] = useState('completed');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch completed services
        const fetchCompletedServices = async () => {
            try {
              setLoading(true)
            const COMPLETED_SERVICES_URL = "/customer/service-requests/completed/";
            const response = await axios.get(COMPLETED_SERVICES_URL);
            setCompletedServices(response.data);
          } catch (error) {
            console.error("Error fetching completed services:", error);
          }
        };

        // Fetch service details
        const fetchServiceDataDetails = async () => {
          try {
            const serviceDetailResponse = await Promise.all(
              completedServices.map((data) =>
                axios.get(`/customer/service-requests/${data.invoice.service_request}/`)
              )
            );
            const completedBookings = serviceDetailResponse
              .map((res) => res.data)
              .filter((booking) => booking.service_request.work_status === 'completed');
            setFilteredBookings(completedBookings);
          } catch (error) {
            console.error("Error fetching service data details:", error);
          } finally{
            setLoading(false)
          }
        };
      
        fetchCompletedServices();
        fetchServiceDataDetails();
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
        navigate(`/booking_details/${booking.service_request.booking_id}`)
        console.log(`Navigating to booking details page\nBooking_id: ${booking.service_request.booking_id}`);
    };

    const handleViewClick = (providerId) => {
        navigate(`/provider_profile/${providerId}`)
        console.log(`Navigating to provider profile page\nProvider_id: ${providerId}`);
    };
  
    return (
        <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
            <StatusTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full max-w-screen-xl">
                {loading ? (
                    <div className="col-span-full text-center p-4">
                        <p className="text-lg font-semibold">Loading...</p>
                    </div>
                ) : 
               (filteredBookings.length === 0 ? (
                    <div className="col-span-full text-center p-4">
                        <p className="text-lg font-semibold">No bookings available.</p>
                        <p>Please check back later or create a new booking.</p>
                    </div>
                ) : (
                    filteredBookings.map((booking, index) => {
                        const mappedStatus = mapStatus(booking.service_request.work_status);
                        const { text: buttonText, disabled: buttonDisabled } = getButtonDetails(mappedStatus);
                       completedServices.map((service)=>{
                           return (
                               <BookingsCard
                                   key={index}
                                   serviceTitle={booking.service_request.title}
                                   customerName={booking.service_request.service_provider_name}
                                   status={mappedStatus}
                                   job={mappedStatus}
                                   additional_requirements={booking.invoice.additional_requirements}
                                   amount={booking.invoice.total_amount}
                                   date={booking.invoice.appointment_date}
                                   time={`${booking.service_request.availability_from} - ${booking.service_request.availability_to}`}
                                   openModal={() => openModal(booking)}
                                   onButtonClick={() => handleButtonClick(booking)}
                                   onClickView={handleViewClick}
                                   buttonText={buttonText}
                                   buttonDisabled={buttonDisabled}
                                   providerId={service.service_provider}
                               />
                           );

                       })

                       
                    })
                ))
                
                }
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