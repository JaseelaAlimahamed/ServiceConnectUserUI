/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";
import { fetchCategories } from "../../../../services/categories/categoriesApi";

const AllCategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const navigate = useNavigate();

  // Fetch categories on component mount
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

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 10);

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
          grid-cols-3 
          sm:grid-cols-3 
          md:grid-cols-4
          lg:grid-cols-4
          xl:grid-cols-6
          2xl:grid-cols-6"
      >
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            onClick={() =>
              handleCategoryClick(category.id, category.title)
            }
          >
            <CategoryCardComponent
              categoryImage={category.image || "default-image-url.jpg"}
              categoryName={category.title}
            />
          </div>
        ))}
        {showAllCategories && (
          <CategoryCardComponent onClick={() => setShowAllCategories(false)} />
        )}
      </div>
    </div>
  );
};

export default AllCategoryComponent;
