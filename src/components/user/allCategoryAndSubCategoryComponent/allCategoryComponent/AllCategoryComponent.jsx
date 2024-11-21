/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";
import { fetchCategories } from "../../../../services/apiServices/homeApi";
import NoImage from "../../../../assets/NoImage.jpg";

const AllCategoryComponent = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        console.log("Categories fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (categoryId, categoryTitle) => {
    if (categoryTitle === "ALL") {
      console.log("All categories selected");
      setShowAllCategories(true);
    } else {
      console.log(`Category selected: ${categoryTitle}`);
      navigate(`/subcategories/${categoryId}`);
    }
  };

  const displayedCategories = showAllCategories ? [...categories] : categories.slice(0, 10);

  return (
    <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
      <div
        className="grid 
        items-center 
        justify-center 
        gap-5 
        sm:p-6 
        md:p-8 
        lg:p-10 
        xl:p-12 
        sm:gap-4 
        md:gap-8 
        lg:gap-12 
        xl:gap-16 
        grid-cols-2 
        sm:grid-cols-1 
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-6"
      >
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id, category.title)}
          >
            <CategoryCardComponent
              categoryImage={category.image || NoImage}
              categoryName={category.title}
            />
          </div>
        ))}
        {showAllCategories && (
          <button
            onClick={() => setShowAllCategories(false)}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllCategoryComponent;
