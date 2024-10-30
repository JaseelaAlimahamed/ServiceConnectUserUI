import axiosInstance from "../../axios/axiosInstance"



const  serviceProviderListApi = async (subCategoryId) => {
    try {
        const response = await axiosInstance.get(`/customer/subcategories/${subCategoryId}/service-providers/`);
        
       
        return response.data ;

    } catch (err) {
        console.error("Error fetching service providers:", err);
        return err ;
    }
};

export default serviceProviderListApi 