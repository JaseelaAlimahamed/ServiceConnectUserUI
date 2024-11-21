//    localStorage.setItem(authtoken)
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjIyNTAyLCJpYXQiOjE3MzA1MzYxMDIsImp0aSI6IjcwNzVjZDFhMWFmZjRkM2ViZjI5ODdmNTZkNGYyOTgzIiwidXNlcl9pZCI6N30.M-BUhSsvWFROuPzsSCV0GPuZGTFmvfCbp4eEhcltgao"
//Api is ok
export async function viewRequestUser() {
  // Retrieve token from local storage (or other storage)
  const token = localStorage.getItem("authToken");

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/customer/view-request-user/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authtoken}`, // Add the token here
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to view request user :", error);
    throw error;
  }
}

//Api is ok
export async function serviceRequestInvoice(serviceRequestId) {
  // Retrieve token from local storage (or other storage)
  const token = localStorage.getItem("authToken");
  const serviceId = { service_request_id: serviceRequestId };
  console.log(serviceId);
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/customer/service-request-invoice/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authtoken}`, // Add the token here
        },
        body: JSON.stringify(serviceId),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("**********************************");

    return data;
  } catch (error) {
    console.error("Failed to add service request Id:", error);
    throw error;
  }
}

export async function serviceRequest(serviceData) {
  // Retrieve token from local storage (or other storage)
  const token = localStorage.getItem("authToken");

  // Create a new FormData instance
  const formData = new FormData();

  console.log("+++++++++++++++++++++++", formData);
  // console.log("Sending Service ID:", formData.service);

  // Append other service data to the formData
  formData.append("service", serviceData.service);
  formData.append("title", serviceData.title);
  formData.append("service_provider_id", serviceData.service_provider_id);
  formData.append("availability_from", serviceData.availability_from);
  formData.append("availability_to", serviceData.availability_to);
  formData.append("additional_notes", serviceData.additional_notes);
  // Append the image file, if provided
  if (serviceData.images) {
    formData.append("image", serviceData.images);
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/customer/service-request/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authtoken}`, // Use token retrieved from localStorage
        },
        body: formData,
      }
    );

    // const responseText = await response.text(); // Get response as text first
    // console.log("Raw Response:--------------- ", responseText);

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    if (!response.ok) {
      const errorDetail = await response.json(); // Capture error details from the response
      console.error("Server response------------:", errorDetail);
      // alert(responseText)
      throw new Error(`Error: ${errorDetail.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("--------------------------------------");

    return data;
  } catch (error) {
    console.error("Failed to add service request:", error);
    throw error;
  }
}

export async function serviceProvider(serviceproId) {
  // Retrieve token from local storage (or other storage)
  const token = localStorage.getItem("authToken");

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/customer/service_provider/${serviceproId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authtoken}`, // Add the token here
        },
      }
    );
    console.log(">>>>>>>>>>>>>>>>>>>>>", response);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("****************************", data);

    return data;
  } catch (error) {
    console.error("Failed to add service request Id:", error);
    throw error;
  }
}