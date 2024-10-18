import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const Details = ({ data }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.transactionId);
    alert('Transaction ID copied to clipboard!');
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <p className="font-semibold">Name:</p>
        <p>{data.name}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Email ID:</p>
        <p>{data.email}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Course:</p>
        <p>{data.course}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Category:</p>
        <p>{data.category}</p>
      </div>
      <div className="flex justify-between items-center pt-5">
        <p className="font-semibold">Transaction ID:</p>
        <div className="flex items-center space-x-2">
          <p>{data.transactionId}</p>
          <FaRegCopy className="cursor-pointer text-gray-600 hover:text-gray-800" onClick={handleCopy} />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Price:</p>
        <p>{data.price}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Date:</p>
        <p>{data.date} / {data.time}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Status:</p>
        <span className="bg-green-600 text-primary px-[19px] ">{data.status}</span>
      </div>
    </div>
  );
};

export default Details;
