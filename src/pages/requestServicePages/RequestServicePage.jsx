import React from 'react'
import ServiceRequestForm from '../../components/user/requestServiceComponent/RequestFormComponent'
import RequestService from '../../components/user/requestServiceComponent/RequestService'

function RequestServicePage() {
    // Dummy data for the service provider
const serviceProvider = {
    id: 101,
    name: 'John Doe',
    designation: 'Plumber',
    image:'https://via.placeholder.com/60'
  };

  const handleFormSubmit = (formData) => {
    console.log("Form data received from child:", formData, serviceProvider);
    
  };
  return (
    <div className='flex justify-center'><RequestService serviceProvider={serviceProvider} handleSubmit={handleFormSubmit}/></div>
  )
}

export default RequestServicePage