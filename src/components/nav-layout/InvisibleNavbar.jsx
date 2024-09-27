import React from 'react'

import { BsSliders } from "react-icons/bs";
import SearchIconComponent from '../reUsableComponents/SearchIconComponent';

const InvisibleNavbar = () => {
  return (
   
        <div className='flex items-center justify-end mr-8 h-16 gap-6'>   
            <div>
            <SearchIconComponent/>
            </div>
            <div>
            <BsSliders size={24}/>
            </div>
        </div>
   
  )
}

export default InvisibleNavbar