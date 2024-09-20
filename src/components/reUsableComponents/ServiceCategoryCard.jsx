import React, { useState } from "react";

const ServiceCategoryCard = ({ imgUrl, category, }) => {
  return (
    <div className="w-[120px] h-[128px] flex flex-col items-center text-center">
      <div className="w-[97px] h-[87px]  border-[3px] border-dark-violet rounded-3xl p-[2px]">
        <img className="w-full h-full rounded-3xl" src={imgUrl} alt="" />
      </div>
      <h6 className="text-dark-violet font-semibold">{category}</h6>
    </div>
  );
};

export default ServiceCategoryCard;

