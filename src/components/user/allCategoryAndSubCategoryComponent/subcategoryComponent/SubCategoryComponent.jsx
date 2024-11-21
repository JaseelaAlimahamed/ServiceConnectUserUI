import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";

const subCategoriesData = [
  {
    id: 1,
    categoryName: "BEAUTY SERVICES",
    subCategories: [
      {
        id: 1,
        subCategoryName: "BEAUTY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "BEAUTY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BEAUTY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "BEAUTY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BEAUTY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "BEAUTY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 2,
    categoryName: "BUSINESS AND SERVICES",
    subCategories: [
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "BUSINESS AND SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 3,
    categoryName: "CLEANING SERVICE",
    subCategories: [
      {
        id: 1,
        subCategoryName: "CLEANING SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "CLEANING SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "CLEANING SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "CLEANING SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "CLEANING SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "CLEANING SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 4,
    categoryName: "DELIVERY SERVICES",
    subCategories: [
      {
        id: 1,
        subCategoryName: "DELIVERY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "DELIVERY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "DELIVERY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "DELIVERY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "DELIVERY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "DELIVERY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 5,
    categoryName: "ELECTRONICS REPAIR",
    subCategories: [
      {
        id: 1,
        subCategoryName: "ELECTRONICS REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "ELECTRONICS REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "ELECTRONICS REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "ELECTRONICS REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "ELECTRONICS REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "ELECTRONICS REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 6,
    categoryName: "EVENTS AND PARTY",
    subCategories: [
      {
        id: 1,
        subCategoryName: "EVENTS AND PARTY 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "EVENTS AND PARTY 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "EVENTS AND PARTY 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "EVENTS AND PARTY 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "EVENTS AND PARTY 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "EVENTS AND PARTY 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 7,
    categoryName: "HEALTH AND FITNESS",
    subCategories: [
      {
        id: 1,
        subCategoryName: "HEALTH AND FITNESS 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HEALTH AND FITNESS 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "HEALTH AND FITNESS 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HEALTH AND FITNESS 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "HEALTH AND FITNESS 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HEALTH AND FITNESS 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 8,
    categoryName: "HOME APPLIANCE REPAIR",
    subCategories: [
      {
        id: 1,
        subCategoryName: "HOME APPLIANCE REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HOME APPLIANCE REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "HOME APPLIANCE REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HOME APPLIANCE REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "HOME APPLIANCE REPAIR 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "HOME APPLIANCE REPAIR 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 9,
    categoryName: "LAUNDRY SERVICE",
    subCategories: [
      {
        id: 1,
        subCategoryName: "LAUNDRY SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "LAUNDRY SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "LAUNDRY SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "LAUNDRY SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "LAUNDRY SERVICE 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "LAUNDRY SERVICE 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
  {
    id: 10,
    categoryName: "TECHNOLOGY SERVICES",
    subCategories: [
      {
        id: 1,
        subCategoryName: "TECHNOLOGY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "TECHNOLOGY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "TECHNOLOGY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "TECHNOLOGY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 1,
        subCategoryName: "TECHNOLOGY SERVICES 1",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
      {
        id: 2,
        subCategoryName: "TECHNOLOGY SERVICES 2",
        subCategoryImage:
          "https://www.istockphoto.com/resources/images/PhotoFTLP/JobsCareers-901568660.jpg",
      },
    ],
  },
];

const SubCategoryComponent = () => {
  const { categoryId } = useParams();
  console.log("categoryId from useParams:", categoryId);

  const category = subCategoriesData.find(
    (cat) => cat.id === parseInt(categoryId)
  );
  console.log("Matching category:", category);

  if (!category) {
    return <div>No subcategories available for this category.</div>;
  }

  const subCategories = category?.subCategories;

  console.log("Subcategories to render:", subCategories);
  const navigate = useNavigate();
  // If you need the params

  const handleCardClick = (subCategoryId) => {
    navigate(`/service-provider-list/${subCategoryId}`);
  };

  const handleBackToCategories = () => {
    navigate("/categories"); // Update this path based on your categories route
  };

  return (
    <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
      <div
        className="grid 
        items-center 
        justify-center 
        gap-3 
        sm:p-6 
        md:p-8 
        lg:p-10 
        xl:p-12 
        sm:gap-4 
        md:gap-8 
        lg:gap-12 
        xl:gap-16 
        grid-cols-3 
        sm:grid-cols-3 
        md:grid-cols-4
        lg:grid-cols-4
        xl:grid-cols-6
        2xl:grid-cols-6"
      >
        {subCategories.map((subCategory, index) => (
          <div   onClick={() =>
            handleCardClick(subCategory.id)
          }>
          <CategoryCardComponent
            key={index}
            categoryId={subCategory.id}
            categoryImage={subCategory.subCategoryImage}
            categoryName={subCategory.subCategoryName}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryComponent;
