import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import DropdownMenu from "../../components/user/eRecieptPageComponents/DropDownMenu";
import Details from "../../components/user/eRecieptPageComponents/Details";

const Reciept = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
  };

  const data = {
    name: "Scott R. Shoemake",
    email: "shoemake.redial@gmail.com",
    course: "3d Character Illustration",
    category: "Web Development",
    transactionId: "SK345680976",
    price: "$55.00",
    date: "Nov 20, 202X",
    time: "15:45",
    status: "Paid",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-primary rounded-lg shadow-lg relative font-sans">
      <div className="flex justify-end">
        <FaEllipsisV
          onClick={handleDropdownClick}
          className="cursor-pointer text-xl"
        />
        <DropdownMenu show={showDropdown} onClick={handleOptionClick} />
      </div>

      <div className="flex justify-center ">
        <img src="src\assets\payment_icon.png" alt="Payment Icon" />
        
      </div>
      <div className="flex justify-center my-6 ">
        <img src="src\assets\Barcode_icon.png" alt="Barcode Icon" />
       
      </div>

      <Details data={data} />
    </div>
  );
};

export default Reciept;
