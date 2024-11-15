import React from 'react'
import ComplaintFormComponent from '../../components/user/complaintFormPageComponent/ComplaintFormComponent';
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
function ComplaintFormPage() {

  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails] = useState("");
  const  id  = (useParams().id).slice(1);
  useEffect(() => {
      const fetchBookingDetails = async () => {
          try {
              const token = localStorage.getItem('token');
              const response = await fetch(`https://learnbudsgvr.pythonanywhere.com/customer/service-requests/${id}/`, {
                  headers: {
                      'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjYwMjE1LCJpYXQiOjE3MzE2NTg0MTUsImp0aSI6IjY1NjQ0YTA5MWYxZTQ4ZDc4NmM4ZGExYWRhOWZjY2Y1IiwidXNlcl9pZCI6N30.hcsyROg7N7zRiv69coa92D9jFOt6xQVTI7yKKb-glzE`,
                      'Content-Type': 'application/json',
                  },
              });
  
              if (response.ok) {
                  const data = await response.json();
                  setBookingDetails(data);
                  
              }
          } catch (error) {
              console.error('Error fetching booking details:', error);
          }
          setLoading(false);
      };
  
      fetchBookingDetails();
      
  }, [id]);
    const serviceProvider = {
        id: 101,
        name: bookingDetails?.service_request?.service_provider_name || null,
        designation: bookingDetails?.service_request?.title || null ,
        image: bookingDetails?.service_request?.image || null
      };
      const appointment_date = bookingDetails?.invoice?.appointment_date ||null;
      const dateObject = new Date(appointment_date);
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const timeOptions = { hour: 'numeric', minute: 'numeric' };
      const formattedDate = dateObject.toLocaleDateString('en-US', options);
      const formattedTime = dateObject.toLocaleTimeString('en-US', timeOptions);

    const bookingdetails = {
        bookingId: bookingDetails?.service_request?.booking_id,
        title: bookingDetails?.service_request?.subcategory_title,
        description:"Bulb change required",
        appointmentDate: formattedDate,
        appointmentTime:formattedTime,
        additionalInfo: [bookingDetails?.invoice?.additional_requirements]
    };
    
    const invoiceDetails = {
        description:"this is a long description",
        quantity: bookingDetails?.invoice?.quantity || null,
        price: bookingDetails?.invoice?.price || null,
        Total:((bookingDetails?.invoice?.price) * (bookingDetails?.invoice?.quantity)) ,
        grandTotal:bookingDetails?.invoice?.total_amount || null,
    };

  return (
    <div className='flex justify-center'><ComplaintFormComponent ServiceProvider={serviceProvider} BookingDetails={bookingdetails} InvoiceDetails={invoiceDetails} /></div>
  )
}

export default ComplaintFormPage