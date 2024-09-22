/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
const CategoryCardComponent = ({ categoryImage, categoryName }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm rounded-2xl gap-2 overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300 w-[140px] h-[160px] p-1 cursor-pointer">
      <img
      className="object-cover w-[100px] h-[100px]"
      src={categoryImage}
      alt={categoryName}
      />
        <div className="text-center font-semibold text-sm mb-2 text-gray-800">{categoryName}</div>
    </div>
  )
}

export default CategoryCardComponent
