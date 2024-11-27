import React from 'react'
import ServiceRequestForm from './RequestFormComponent'

function RequestService({ serviceProvider, handleSubmit }) {
    console.log(serviceProvider)
    return (
        <div className='min-h-screen bg-gray-300 p-6 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto my-0 md:my-10 rounded-lg'>

            {/* Profile Section */}
            <div className="flex items-center mb-6">
                <img
                    src={serviceProvider.image}
                    alt="Profile"
                    className="rounded-full w-14 h-14"
                />
                <div className="ml-3">
                    <h3 className="text-lg font-semibold">{serviceProvider.name}</h3>
                    <p className="text-gray-500 text-sm">{serviceProvider.designation}</p>
                </div>
            </div>

            {/* Service Request Form */}
            <ServiceRequestForm onSubmitForm={handleSubmit} />
        </div>
    )
}

export default RequestService