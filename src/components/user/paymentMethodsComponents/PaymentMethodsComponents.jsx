/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import ButtonComponent from "../../reUsableComponents/ButtonComponent";
import { FaRegDotCircle } from "react-icons/fa";
import ServicesListingCardComponent from "../../reUsableComponents/servicesListingCardComponent/ServicesListingCardComponent";


const services = [
  {
    id: 1,
    serviceImg: "https://img.freepik.com/free-photo/service-support-solution-guide-concept_53876-120451.jpg?size=626&ext=jpg",
    serviceTitle: 'Graphic Design',
    serviceDescription: 'Setup your Graphic Design'
  }
]

const PaymentMethodsComponents = ({ handleButtonClick, setSelectedPaymentMethod }) => {
  const [selectedPaymentMethod, setLocalSelectedPaymentMethod] = useState(null)

  const handleSelectPaymentMethod = (method) => {
    setLocalSelectedPaymentMethod(method);
    setSelectedPaymentMethod(method);
  };

  const handleSubmit = () => {
    handleButtonClick(); // Call the parent's button click handler
  };


  return (
    <div className="bg-light-blue p-6">

      <div className="flex items-center justify-center">
      {services.map((service, index) => (
          <ServicesListingCardComponent
            key={index}
            serviceImg={service.serviceImg}
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription}
          />
        ))}
      </div>

      <div className="flex items-center justify-center p-4">
        <p className="text-center text-#545454 font-input font-bold text-[14px] lg:text-[18px]">
          Select the Payment Methods you Want to Use
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-end bg-primary shadow-lg gap-4 p-4 rounded-2xl w-[360px] h-[60px] sm:w-[460px] md:w-[560px] lg:w-[660px] xl:w-[760px]">
          <p className="text-center font-input font-extrabold text-[14px] xl:text-[18px] text-#202244">
            Paypal
          </p>
          <div onClick={() => handleSelectPaymentMethod("paypal")}>
            {
              selectedPaymentMethod === "paypal" ? (
                <FaRegDotCircle
                className="text-#202244 cursor-pointer w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[38px] xl:h-[38px]"
                />
              ) : (
                <FaRegCircle
                className="text-#B4BDC4 cursor-pointer w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[38px] xl:h-[38px]"
                />
              )
            }
          </div>
        </div>

        <div className="flex items-center justify-end bg-primary shadow-lg gap-4 p-4 rounded-2xl w-[360px] h-[60px] sm:w-[460px] md:w-[560px] lg:w-[660px] xl:w-[760px]">
          <p className="text-center font-input font-extrabold text-[14px] xl:text-[18px] text-#202244">
            Google Pay
          </p>
          <div onClick={() => handleSelectPaymentMethod("googlepay")}>
            <span>
            {
              selectedPaymentMethod === "googlepay" ? (
                <FaRegDotCircle
                className="text-#202244 cursor-pointer w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[38px] xl:h-[38px]"
                />
              ): (
                <FaRegCircle
                className="text-#B4BDC4 cursor-pointer w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[38px] xl:h-[38px]"
                />
              )
            }
            </span>
          </div>
        </div>

        <div className="">
                  {/* check for bottom space pt-40 */}
          <div className="flex items-center justify-end pt-40 p-4 w-[360px] h-[60px] sm:w-[460px] md:w-[560px] lg:w-[600px] xl:w-[760px]">
            <IoIosAddCircle className="text-#1D1F2A cursor-pointer w-[62px] h-[62px] md:w-[68px] md:h-[68px] xl:w-[72px] xl:h-[72px]" />
          </div>

          <div className="flex items-center justify-center p-5">
            <ButtonComponent
            btnWidth="100%"
            label="Enroll Course - $"
            rate="55"
            onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsComponents;
