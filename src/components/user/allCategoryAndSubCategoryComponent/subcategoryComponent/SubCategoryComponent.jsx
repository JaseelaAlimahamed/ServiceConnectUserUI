import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";
import { fetchSubCategories } from "../../../../services/subcategories/subcategoriesApi";

const SubCategoryComponent = () => {
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const data = await fetchSubCategories(categoryId);
        setSubCategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    getSubCategories();
  }, [categoryId]);

  const handleCardClick = (subCategoryId) => {
    navigate(`/service-provider-list/${subCategoryId}`);
  };

  const handleBackToCategories = () => {
    navigate("/categories"); // Update this path based on your categories route
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-light-gray min-h-screen flex flex-col items-center">
      {subCategories.length > 0 ? (
        <div
          className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full 
                      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6"
        >
          {subCategories.map((subCategory) => (
            <div
              key={subCategory.id}
              onClick={() => handleCardClick(subCategory.id)}
              className="cursor-pointer transition-transform transform hover:scale-105"
            >
              <CategoryCardComponent
                categoryImage={subCategory.image}
                categoryName={subCategory.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-lg font-semibold text-gray-600 mb-4">
            No subcategories available for this category.
          </p>
          <button
            onClick={handleBackToCategories}
            className="bg-secondary text-white rounded-full py-2 px-6 w-2/3 sm:w-1/3 lg:w-1/5 transition-colors hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default SubCategoryComponent;
