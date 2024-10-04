/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const CategoryCardComponent = ({ categoryImage, categoryName, subcategories }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl gap-2 overflow-hidden shadow-lg bg-primary hover:scale-105 transition-transform duration-300 w-[105.84px] h-[115px] sm:w-[115.84px] sm:h-[125px] md:w-[125.84px] md:h-[135px] lg:w-[135.84px] lg:h-[145px] xl:w-[145.84px] xl:h-[155px] 2xl:w-[155.84px] 2xl:h-[165.84px] p-1 cursor-pointer">
      <img
        className="object-cover rounded-2xl w-[89px] h-[74.53px] sm:w-[99px] sm:h-[84.53px] md:w-[109px] md:h-[94.53px] lg:w-[119px] lg:h-[104.53px] xl:w-[129px] xl:h-[114.53px] 2xl:w-[139px] 2xl:h-[124.53px]"
        src={categoryImage}
        alt={categoryName}
      />
      <div className="text-center font-bold font-input text-[8px] md:text-[10px] xl:text-[12px] mb-2 text-secondary">{categoryName}</div>
      {subcategories && subcategories.length > 0 && (
        <div className="flex flex-col items-center">
          {subcategories.map((subcategory, index) => (
            <div key={index} className="text-xs text-gray-600">
              {subcategory}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCardComponent;