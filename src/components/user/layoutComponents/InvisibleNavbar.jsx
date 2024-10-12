import React from 'react'
import SearchIconComponent from '../../reUsableComponents/SearchIconComponent'
import FilterIcon from './FilterComponents/FilterIcon'

const InvisibleNavbar = () => {
  return (
   
        <div className='flex items-center justify-end bg-light-gray pr-8 h-16 gap-6'>   
            <div>
            <SearchIconComponent />
            </div>
            <div>
            <FilterIcon/>
            </div>
        </div>
   
  )
}

export default InvisibleNavbar
