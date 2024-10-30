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

  return (
    <div className="p-4 sm:p-6 
          md:p-8 
          lg:p-10 
          xl:p-12 bg-light-gray min-h-screen">
      <div className="grid items-center justify-center gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {subCategories.map((subCategory) => (
          <div key={subCategory.id} onClick={() => handleCardClick(subCategory.id)}>
            <CategoryCardComponent
              categoryImage={subCategory.image}
              categoryName={subCategory.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryComponent;
