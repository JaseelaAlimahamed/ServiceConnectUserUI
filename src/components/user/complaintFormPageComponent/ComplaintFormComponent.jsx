import React from 'react'
import ProviderDetailsComponent from './ProviderDetailsComponent'
import BookingDetailsComponent from './BookingDetailsComponent'
import ButtonComponent from '../../reUsableComponents/ButtonComponent'
import ComplaintForm from './ComplaintForm'

function ComplaintFormComponent({ BookingDetails, ServiceProvider, InvoiceDetails }) {


    const ServiceOnclick = () => {
        console.log("Service status button clicked")
    }

    const PaymentOnClick = () => {
        console.log("Payment status button clicked")
    }
    return (
        <div className='min-h-screen bg-gray-300 p-6 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-0 md:my-10 rounded-lg'>
            <div>
                <ProviderDetailsComponent ServiceProvider={ServiceProvider} />
            </div>
            <div>
                <BookingDetailsComponent BookingDetails={BookingDetails} InvoiceDetails={InvoiceDetails} />
            </div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-3 space-y-3 md:space-y-0 md:space-x-3'>

                <ButtonComponent label={"Service Status"} btnWidth='w-full md:w-1/3' btnHeight='h-12' onClick={ServiceOnclick} />
                <ButtonComponent label={"Payment Status"} btnWidth='w-full md:w-1/3' btnHeight='h-12' onClick={PaymentOnClick} />
            </div>

            <div>
                <ComplaintForm />
            </div>

        </div>
    )
}

export default ComplaintFormComponent