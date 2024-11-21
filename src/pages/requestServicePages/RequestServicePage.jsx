import React, { useState, useEffect } from "react";
import RequestService from "../../components/user/requestServiceComponent/RequestService";
import { useParams } from "react-router-dom";
import {
  serviceProvider,
  serviceRequest,
} from "../../services/userApiStore/UserApiStore";
function RequestServicePage() {
  const  id  = useParams().id;
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchServiceProvider = async () => {
      try {
        const data = await serviceProvider(id);
        setServiceProviderData(data);
        setLoading(false);
       
        
      } catch (error) {
        console.error("Error fetching service provider:", error);
        setLoading(false);
      }
    };
    fetchServiceProvider();
  }, [id]);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await serviceRequest({
        service: "31",
        title: formData.title,
        description: formData.description,
        service_provider_id: id,
        availability_from: `${formData.fromDate}T${formData.fromTime}:00Z`, // Ensure correct format
        availability_to: `${formData.toDate}T${formData.toTime}:00Z`,
        additional_notes: formData.description,
        image: formData.images ? formData.images[0] : null, // Assuming a single image for simplicity
      });

      console.log("Service Request Successful:", response);
    } catch (error) {
      console.error("Error submitting service request:", error);
    }
  };
  return (
    <div className="flex  justify-center">
      <RequestService
        serviceProvider={serviceProvider}
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default RequestServicePage;
