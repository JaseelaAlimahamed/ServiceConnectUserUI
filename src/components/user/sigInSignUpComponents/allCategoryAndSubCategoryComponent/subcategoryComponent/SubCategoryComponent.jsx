/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

import { useParams } from "react-router-dom";
import CategoryCardComponent from "../../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";

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

  return (
    <div className="bg-light-blue flex items-center justify-center w-full p-2">
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
        sm:grid-cols-4 
        md:grid-cols-5 
        lg:grid-cols-6 
        xl:grid-cols-7 
        2xl:grid-cols-8"
      >
        {subCategories.map((subCategory, index) => (
          <CategoryCardComponent
            key={index}
            categoryImage={subCategory.subCategoryImage}
            categoryName={subCategory.subCategoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryComponent;
