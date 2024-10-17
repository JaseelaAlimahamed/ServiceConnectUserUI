/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FaqComponent from "./faqComponents/FaqComponent";
import ContactUsComponent from "./contactUsComponents/ContactUsComponent";

const HelpCenterComponent = () => {
  const [activeComponent, setActiveComponent] = useState("faq");
  return (
    <div className="flex flex-col items-center p-6 bg-light-gray min-h-screen">
      <div className="flex items-center justify-center mb-6">
        <div className="w-[197px] md:w-[237px] lg:w-[277px] xl:w-[317px] h-[48px] border-b-4 border-[#65558F]">
          <button
            onClick={() => setActiveComponent("faq")}
            className={`px-4 py-2 ${
              activeComponent === "faq"
                ? "text-secondary"
                : "bg-primary text-#1D1B20"
            } rounded font-medium text-sm w-[197px] md:w-[237px] lg:w-[277px] xl:w-[317px] h-[48px]`}
            style={{ textDecorationColor: "#65558F" }}
          >
            FAQ
          </button>
        </div>
        <div className="w-[197px] md:w-[237px] lg:w-[277px] xl:w-[317px] h-[48px] border-b-4 border-[#65558F]">
          <button
            onClick={() => setActiveComponent("contact")}
            className={`px-4 py-2 ${
              activeComponent === "contact"
                ? "text-secondary"
                : "bg-primary text-#1D1B20"
            } rounded font-medium text-sm w-[197px] md:w-[237px] lg:w-[277px] xl:w-[317px] h-[48px]`}
            style={{ textDecorationColor: "#65558F" }}
          >
            CONTACT US
          </button>
        </div>
      </div>
      {activeComponent === "faq" && <FaqComponent />}
      {activeComponent === "contact" && <ContactUsComponent />}
    </div>
  );
};

export default HelpCenterComponent;
