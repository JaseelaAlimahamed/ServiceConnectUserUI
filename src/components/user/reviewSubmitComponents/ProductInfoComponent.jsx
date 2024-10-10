import React from 'react';

const ProductInfo = ({ imageSrc, category, title }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center">
      {/* Render the product image */}
      <div className="w-16 h-16 bg-black">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded" />
      </div>
      {/* Render the product category and title */}
      <div className="ml-4">
        <p className="text-orange-500 font-bold">{category}</p>
        <p className="text-lg text-[#202244] font-bold">{title}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
