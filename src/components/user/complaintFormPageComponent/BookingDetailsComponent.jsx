import React from 'react'
import InvoiceDetailsComponent from './InvoiceDetailsComponent'

function BookingDetailsComponent({ BookingDetails, InvoiceDetails }) {
    return (
        <div className='bg-white rounded-lg p-5 '>
            <div className='mb-3'>
                <h1 className='text-base font-semibold text-gray-500'>Booking Id:{BookingDetails.bookingId}</h1>
            </div>
            <div className=''>
                <h1 className='text-base font-semibold'>Title</h1>
                <p className='ml-5 font-semibold'>{BookingDetails.title}</p>
                <h1 className='text-base font-semibold'>Description</h1>
                <p className='ml-5 font-semibold'>{BookingDetails.description}</p>
            </div>
            <div className='mt-3'>
                <h1 className='text-base font-semibold'>Appointment</h1>
                <div className='flex justify-center mt-5'>
                    <p className='flex bg-zinc-200 w-36 h-12 justify-center text-xl items-center shadow-xl shadow-slate-300 rounded-lg mr-2  '>{BookingDetails.appointmentDate}</p>
                    <p className='flex bg-zinc-200 w-24 h-12 justify-center text-xl items-center shadow-xl shadow-slate-300 rounded-lg ml-2'>{BookingDetails.appointmentTime}</p>
                </div>
            </div>
            <InvoiceDetailsComponent InvoiceDetails={InvoiceDetails} />
            <div className='text-indigo-custom mt-5'>
                <p>Terms and conditions</p>
                <p>Valid upto 1 month</p>
            </div>
            <div className='flex mt-3'>
                <p className='text-red-700 mr-2 font-semibold'>Additional Requirements</p>
                <img src="../../../../public/warning.svg" alt="Warning icon" />
            </div>
            <div className='text-indigo-custom'>
                <ul>
                    {BookingDetails.additionalInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default BookingDetailsComponent