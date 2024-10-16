/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqItems = [
  {
    type: "general",
    title: "General",
    items: [
      {
        question: "How do I manage my notifications?",
        answer:
          "To manage notifications, go to Settings, select Notification Settings, and customize your preferences.",
      },
      {
        question: "How do I start a guided meditation session?",
        answer:
          "To manage notifications, go to Settings, select Notification Settings, and customize your preferences.",
      },
      {
        question: "How do I join a support group?",
        answer:
          "To manage notifications, go to Settings, select Notification Settings, and customize your preferences.",
      },
      {
        question: "How do I manage my notifications?",
        answer:
          "To manage notifications, go to Settings, select Notification Settings, and customize your preferences.",
      },
      {
        question: "How do I start a guided meditation session?",
        answer:
          "To manage notifications, go to Settings, select Notification Settings, and customize your preferences.",
      },
    ],
  },
  {
    type: "account",
    title: "Account",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking on the 'Sign Up' button on the homepage. You will need to provide your name, email address, and password.",
      },
      {
        question: "How do I log in to my account?",
        answer:
          "You can log in to your account by clicking the 'Login' button and entering your email and password.",
      },
    ],
  },
  {
    type: "payment",
    title: "Payment",
    items: [
      {
        question: "How do I make a payment?",
        answer:
          "You can make a payment by clicking on the 'Make Payment' button on the dashboard. You will need to enter your payment details and confirm the payment.",
      },
      {
        question: "How do I view my payment history?",
        answer:
          "You can view your payment history by clicking on the 'Payment History' button on the dashboard.",
      },
    ],
  },
  {
    type: "service",
    title: "Service",
    items: [
      {
        question: "How do I request a service?",
        answer:
          "You can request a service by clicking on the 'Request Service' button on the dashboard. You will need to provide the details of the service you require.",
      },
      {
        question: "How do I view my service history?",
        answer:
          "You can view your service history by navigating to the 'Service History' section in your account.",
      },
    ],
  },
  {
    type: "support",
    title: "Support",
    items: [
      {
        question: "How do I contact support?",
        answer:
          "You can contact support by clicking on the 'Contact Support' button on the dashboard. You will need to provide your name and email address, and a brief description of your issue.",
      },
      {
        question: "How do I report a problem?",
        answer:
          "You can report a problem by contacting support or using the 'Report a Problem' feature on the dashboard.",
      },
    ],
  },
];

const FaqComponent = ({
  title,
  disabled = false,
  btnWidth = "w-[83px] md:w-[103px] lg:w-[123[px] xl:w-[143px]",
  btnHeight = "h-[44-px] md:h-[48px] lg:h-[52px] xl:h-[56px]",
  defaultBtnColor = "bg-#FBFBFB",
  selectedBtnColor = "bg-secondary",
  defaultTextColor = "text-secondary",
  selectedTextColor = "text-primary",
  variant = "default",
}) => {
  const [selectedFaq, setSelectedFaq] = useState("general");
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleFaqClick = (type) => {
    setSelectedFaq(type);
  };

  const toggleQuestion = (index) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center text-2xl font-bold p-4">
      <div className="flex items-center gap-4 p-4">
        {faqItems.map((faq) => (
          <button
            key={faq.type}
            onClick={() => handleFaqClick(faq.type)}
            disabled={disabled}
            className={`${variant} ${btnWidth} ${btnHeight} 
              ${selectedFaq === faq.type ? selectedBtnColor : defaultBtnColor}
              ${selectedFaq === faq.type ? selectedTextColor : defaultTextColor}
              flex items-center justify-center shadow-md px-6 py-3 rounded-full text-lg font-medium`}
          >
            <span>{faq.title}</span>
          </button>
        ))}
      </div>
      {selectedFaq && (
        <div className="p-6 rounded-lg max-w-4xl mx-auto">
          {faqItems
            .find((faq) => faq.type === selectedFaq)
            .items.map((item, index) => (
              <div key={index} className="mb-4 bg-#FBFBFB p-5 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-secondary">{item.question}</h3>
                  <div onClick={() => toggleQuestion(index)}>
                    {openQuestionIndex === index ? (
                      <IoIosArrowDown
                      className="cursor-pointer"
                      />
                    ) : (
                      <IoIosArrowDown
                      className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                {openQuestionIndex === index && (
                  <p className="mt-2 text-lg font-medium text-secondary">{item.answer}</p>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
