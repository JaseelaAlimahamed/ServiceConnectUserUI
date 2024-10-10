import React, { useState } from 'react';

const ReviewInput = () => {
  const [review, setReview] = useState("");
  const maxLength = 250;

  return (
    <div className="bg-white rounded-lg p-4">
      <p className='text-[#202244] font-bold'>Write your Review</p>
      <textarea
        className="w-full mt-2 p-2  rounded-lg h-24"
        placeholder="Would you like to write anything about this Product?"
        maxLength={maxLength}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <p className="text-right text-gray-400">{maxLength - review.length} Characters Remaining</p>
    </div>
  );
};

export default ReviewInput;
