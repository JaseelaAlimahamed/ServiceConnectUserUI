import React, { useState } from 'react'
import CongratsModal from '../../reUsableComponents/CongratsModal'
import servicecompleted from '../../../assets/servicecompleted.svg'
import { FaStar } from "react-icons/fa";

const ServiceCompletedModal = () => {
   const [modal,setModal] = useState(true)
   const [rating,setRating] = useState(0)

  const buttonConfig = {
    label: "Write a Review",
    type: "button",
    btnWidth: "75%", // Dynamic button width
    btnHeight: "50px", // Dynamic button height
    
  };
  const modalConfig = {
    title: 'Services Completed',
    message: 'Complete your profile.Please Write a review',
    img:servicecompleted
  }

   const handleClick = (index)=>{
         setRating(index+1)
   }

  const ratings =(
    <div className='flex b'>
      {Array(5).fill(0).map((_,index) =>(
           <FaStar 
           key={index} 
           size={22}
          
           onClick={() =>handleClick(index)}
           style={{cursor:'pointer',
           color:index < rating ? "gold":"gray",
          fill: index < rating ? "#f59e0b" : "gray",
          }}
           />
      ))}
    </div>
  )

  return (
    <div className='bg-light-gray h-screen'>
      hello
      <CongratsModal
      isOpen={modal}
       title={modalConfig.title}
       message={modalConfig.message}  
       buttonConfig={buttonConfig}
       img={modalConfig.img}
       icon={ratings}
      />
    </div>
  )
}

export default ServiceCompletedModal
