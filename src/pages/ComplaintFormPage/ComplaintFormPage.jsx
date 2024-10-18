import React from 'react'
import ComplaintFormComponent from '../../components/user/complaintFormPageComponent/ComplaintFormComponent';

function ComplaintFormPage() {

    const serviceProvider = {
        id: 101,
        name: 'John Doe',
        designation: 'Plumber',
        image:'https://via.placeholder.com/60'
      };

    const bookingdetails = {
        bookingId: "12aadfee",
        title:"Bulb change",
        description:"Bulb change required",
        appointmentDate:"Jun 10, 2024",
        appointmentTime:"9:40 AM",
        additionalInfo: ['Provide Ladder','Bulb should be provided']
    };
    
    const invoiceDetails = {
        description:"this is a long description",
        quantity:1,
        price:300,
        Total:300,
        grandTotal:300
    };

  return (
    <div className='flex justify-center'><ComplaintFormComponent ServiceProvider={serviceProvider} BookingDetails={bookingdetails} InvoiceDetails={invoiceDetails} /></div>
  )
}

export default ComplaintFormPage