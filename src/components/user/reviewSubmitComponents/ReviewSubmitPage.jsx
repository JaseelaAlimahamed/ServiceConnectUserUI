import React from "react";

import ProductInfo from "../reviewSubmitComponents/ProductInfoComponent";
import Upload from "../reviewSubmitComponents/Upload";
import ReviewInput from "../reviewSubmitComponents/ReviewInput";

import ReviewButton from "./SubmitButtonComponent";

function ReviewUpload () {
  // Dummy product data
  const product = {
    imageSrc: "https://via.placeholder.com/64", // URL to a placeholder image
    category: "Graphic Design",
    title: "Setup your Graphic Design..",
  };

  return (
    <div className="min-h-screen bg-light-gray flex justify-center items-center p-4">
      <div className=" rounded-lg  w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="p-4">
          {/* Pass dummy data as props */}
          <ProductInfo
            imageSrc={product.imageSrc}
            category={product.category}
            title={product.title}
          />
          <Upload />
          <ReviewInput />

         
          <ReviewButton label="Submit Review"/>
        </div>
      </div>
    </div>
  );
}

export default ReviewUpload;
