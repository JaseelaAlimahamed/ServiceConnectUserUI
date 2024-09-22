/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CategoryCardComponent from '../../reUsableComponents/CategoryCardComponent';

// Sample data for categories
const categories = [
  {
    id: 1,
    categoryName: "BEAUTY SERVICES",
    categoryImage: "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo="
  },
  {
    id: 2,
    categoryName: "BUSINESS AND SERVICES",
    categoryImage: "https://media.istockphoto.com/id/525637171/photo/medical-presentation.jpg?s=612x612&w=0&k=20&c=qZPgRucDGRWeXvRCDAG-tYMh1z-A3pgYHU0cmspZBc0="
  },
  {
    id: 3,
    categoryName: "CLEANING SERVICE",
    categoryImage: "https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90="
  },
  {
    id: 4,
    categoryName: "DELIVERY SERVICES",
    categoryImage: "https://img.freepik.com/premium-photo/free-shipping-delivery-man-carrying-box-package-customer_1029476-450292.jpg?size=626&ext=jpg"
  }
];

const AllCategoryComponent = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleAllCategoryClick = () => {
    setShowAllCategories(true); // Show all categories when clicked
  };

  return (
    <div className="">
      
      {/* Initially showing only the "All" category card */}
      <div className="">
      {!showAllCategories ? (
        <div onClick={handleAllCategoryClick} className="cursor-pointer">
          <CategoryCardComponent
            categoryImage="https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg"
            categoryName="ALL"
          />
        </div>
      ) : (
        // Showing all categories after clicking the "All" category card
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          {categories.map((category) => (
            <CategoryCardComponent
              key={category.id}
              categoryName={category.categoryName}
              categoryImage={category.categoryImage}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default AllCategoryComponent;


