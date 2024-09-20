import React from 'react'
import { GoChevronLeft } from "react-icons/go";
const HeaderComponent = () => {
  return (
    <div>
        <div>
            <div className="bg-light-gray w-full  ">
               <div className='bg-secondary text-white w-full h-16 flex items-center p-6 gap-4'>
                  <div className='border rounded-full w-7 h-7 flex items-center justify-center ' ><GoChevronLeft /></div>
                    <h5>FORGOT PASSWORD</h5>
               </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent
