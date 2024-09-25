import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';



const FilterIcon = ({onClick}) => {

  return (
    // need to set the route where you
    <div onClick={onClick} className='border p-1 text-2xl text-primary rounded-full'>  

           <VscSettings />

         
    </div>
  )
}

export default FilterIcon