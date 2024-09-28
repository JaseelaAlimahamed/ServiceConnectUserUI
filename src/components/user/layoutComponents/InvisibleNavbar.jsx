import React from 'react'
import SearchIconComponent from '../../reUsableComponents/SearchIconComponent'
import FilterIcon from '../nav-layout/FilterComponents/FilterIcon'

const InvisibleNavbar = () => {
  return (
   
        <div className='flex items-center justify-end mr-8 h-16 gap-6'>   
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
