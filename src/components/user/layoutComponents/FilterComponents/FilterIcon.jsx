import React from 'react'
import { VscSettings } from "react-icons/vsc";



const FilterIcon = ({onClick}) => {

  return (
    <div onClick={onClick} className='border p-1 text-2xl text-primary rounded-full'>  

           <VscSettings />

         
    </div>
  )
}

export default FilterIcon