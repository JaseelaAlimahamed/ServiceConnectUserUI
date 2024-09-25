/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";

const categories = [
  {
    id: 1,
    categoryName: "ALL",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 2,
    categoryName: "BEAUTY SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 3,
    categoryName: "BUSINESS AND SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/525637171/photo/medical-presentation.jpg?s=612x612&w=0&k=20&c=qZPgRucDGRWeXvRCDAG-tYMh1z-A3pgYHU0cmspZBc0=",
  },
  {
    id: 4,
    categoryName: "CLEANING SERVICE",
    categoryImage:
      "https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90=",
  },
  {
    id: 5,
    categoryName: "DELIVERY SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 6,
    categoryName: "ELECTRONICS REPAIR",
    categoryImage:
      "https://media.istockphoto.com/id/641535676/photo/engineer.jpg?s=612x612&w=0&k=20&c=ljQHxve_A7jihul62ikLJ2vPx1VS2PlK6POhL5ZmicA=",
  },
  {
    id: 7,
    categoryName: "EVENTS AND PARTY",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 8,
    categoryName: "HEALTH AND FITNESS",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 9,
    categoryName: "HOME APPLIANCE REPAIR",
    categoryImage:
      "https://media.gettyimages.com/id/1142799362/photo/technician-repairing-air-conditioner-on-the-wall.jpg?s=612x612&w=0&k=20&c=fQAWCZP2m20-tA24CY1MPL8UICNkXOoiEvU6OB55f3I=",
  },
  {
    id: 10,
    categoryName: "LAUNDRY SERVICE",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
  {
    id: 11,
    categoryName: "TECHNOLOGY SERVICES",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
  {
    id: 12,
    categoryName: "ALL",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 13,
    categoryName: "BEAUTY SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 14,
    categoryName: "BUSINESS AND SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/525637171/photo/medical-presentation.jpg?s=612x612&w=0&k=20&c=qZPgRucDGRWeXvRCDAG-tYMh1z-A3pgYHU0cmspZBc0=",
  },
  {
    id: 15,
    categoryName: "CLEANING SERVICE",
    categoryImage:
      "https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90=",
  },
  {
    id: 16,
    categoryName: "DELIVERY SERVICES",
    categoryImage:
      "https://img.freepik.com/premium-photo/free-shipping-delivery-man-carrying-box-package-customer_1029476-450292.jpg?size=626&ext=jpg",
  },
  {
    id: 17,
    categoryName: "ELECTRONICS REPAIR",
    categoryImage:
      "https://media.istockphoto.com/id/641535676/photo/engineer.jpg?s=612x612&w=0&k=20&c=ljQHxve_A7jihul62ikLJ2vPx1VS2PlK6POhL5ZmicA=",
  },
  {
    id: 18,
    categoryName: "EVENTS AND PARTY",
    categoryImage:
      "https://hips.hearstapps.com/hmg-prod/images/4-23-24roman-williams-168-66291297736e4.jpg?crop=0.667xw:1.00xh;0.168xw,0&resize=360:*",
  },
  {
    id: 19,
    categoryName: "HEALTH AND FITNESS",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 20,
    categoryName: "HOME APPLIANCE REPAIR",
    categoryImage:
      "https://media.gettyimages.com/id/1142799362/photo/technician-repairing-air-conditioner-on-the-wall.jpg?s=612x612&w=0&k=20&c=fQAWCZP2m20-tA24CY1MPL8UICNkXOoiEvU6OB55f3I=",
  },
  {
    id: 21,
    categoryName: "LAUNDRY SERVICE",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
  {
    id: 22,
    categoryName: "TECHNOLOGY SERVICES",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
  {
    id: 23,
    categoryName: "ALL",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 24,
    categoryName: "BEAUTY SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 25,
    categoryName: "BUSINESS AND SERVICES",
    categoryImage:
      "https://media.istockphoto.com/id/525637171/photo/medical-presentation.jpg?s=612x612&w=0&k=20&c=qZPgRucDGRWeXvRCDAG-tYMh1z-A3pgYHU0cmspZBc0=",
  },
  {
    id: 26,
    categoryName: "CLEANING SERVICE",
    categoryImage:
      "https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90=",
  },
  {
    id: 27,
    categoryName: "DELIVERY SERVICES",
    categoryImage:
      "https://img.freepik.com/premium-photo/free-shipping-delivery-man-carrying-box-package-customer_1029476-450292.jpg?size=626&ext=jpg",
  },
  {
    id: 28,
    categoryName: "ELECTRONICS REPAIR",
    categoryImage:
      "https://media.istockphoto.com/id/641535676/photo/engineer.jpg?s=612x612&w=0&k=20&c=ljQHxve_A7jihul62ikLJ2vPx1VS2PlK6POhL5ZmicA=",
  },
  {
    id: 29,
    categoryName: "EVENTS AND PARTY",
    categoryImage:
      "https://hips.hearstapps.com/hmg-prod/images/4-23-24roman-williams-168-66291297736e4.jpg?crop=0.667xw:1.00xh;0.168xw,0&resize=360:*",
  },
  {
    id: 30,
    categoryName: "HEALTH AND FITNESS",
    categoryImage:
      "https://media.istockphoto.com/id/1364860707/photo/dancing-for-fitness.jpg?s=612x612&w=0&k=20&c=xbd7Sl76FEydUrd6WXpyiXZUQAXEKSU9CIb3Pc6aBBo=",
  },
  {
    id: 31,
    categoryName: "HOME APPLIANCE REPAIR",
    categoryImage:
      "https://media.gettyimages.com/id/1142799362/photo/technician-repairing-air-conditioner-on-the-wall.jpg?s=612x612&w=0&k=20&c=fQAWCZP2m20-tA24CY1MPL8UICNkXOoiEvU6OB55f3I=",
  },
  {
    id: 32,
    categoryName: "LAUNDRY SERVICE",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
  {
    id: 33,
    categoryName: "TECHNOLOGY SERVICES",
    categoryImage:
      "https://img.freepik.com/premium-photo/it-professionals-troubleshooting-computers-networks-software-systems-seamless-support_98005-4415.jpg?size=626&ext=jpg",
  },
];

const AllCategoryComponent = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId, categoryName) => {
    if (categoryName === "ALL") {
      console.log("All categories selected");
      setShowAllCategories(true);
    } else {
      console.log(`Category selected: ${categoryName}`);
      navigate(`/allcategories/${categoryId}`);
    }
  };

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 10);

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
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            onClick={() =>
              handleCategoryClick(category.id, category.categoryName)
            }
          >
            <CategoryCardComponent
              categoryImage={category.categoryImage}
              categoryName={category.categoryName}
            />
          </div>
        ))}{" "}
        :
        {showAllCategories && (
          <CategoryCardComponent onClick={() => setShowAllCategories(false)} />
        )}
      </div>
    </div>
  );
};

export default AllCategoryComponent;
