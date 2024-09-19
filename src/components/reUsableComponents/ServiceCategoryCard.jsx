import React, { useState } from "react";

const ServiceCategoryCard = ({ imgUrl, category, }) => {
  return (
    <div className="w-[128px] h-[128px] text-center">
      <div className="w-[128px] h-[110px] border-4 border-dark-violet rounded-3xl p-[5px]">
        <img className="w-full h-full rounded-3xl" src={imgUrl} alt="" />
      </div>
      <h6 className="text-dark-violet font-semibold">{category}</h6>
    </div>
  );
};

export default ServiceCategoryCard;
