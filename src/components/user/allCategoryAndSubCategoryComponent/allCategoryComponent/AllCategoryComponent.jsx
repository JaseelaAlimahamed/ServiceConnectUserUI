// Import necessary modules
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCardComponent from "../../../reUsableComponents/UserHomeComponents/CategoryCardComponent";
import { fetchCategories } from "../../../../services/categories/categoriesApi";

const AllCategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data); // Store the fetched categories in state
      } catch (error) {
        setError("Failed to load categories");
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    loadCategories();
  }, []);

  // Navigate or show all categories based on selection
  const handleCategoryClick = (categoryId, categoryName) => {
    if (categoryName === "ALL") {
      setShowAllCategories(true);
    } else {
      navigate(`/subcategories/${categoryId}`);
    }
  };

  const displayedCategories = showAllCategories ? categories : categories.slice(0, 10);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 lg:ml-12 bg-light-gray min-h-screen">
      <div className="grid items-center justify-center gap-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id, category.title)}
          >
            <CategoryCardComponent
              categoryImage={category.image || 'default-image-url.jpg'} // Fallback if image is null
              categoryName={category.title} // Using `title` instead of `categoryName`
              categoryDescription={category.description} // Optional: add description if needed in the card
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
