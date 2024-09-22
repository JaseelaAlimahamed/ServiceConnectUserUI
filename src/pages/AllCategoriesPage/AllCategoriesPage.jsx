/* eslint-disable no-unused-vars */
import React from 'react'
import AllCategoryComponent from '../../components/user/allCategoryPageComponents/AllCategoryComponent'
import DeliveryServicesCategoryCardComponent from '../../components/user/allCategoryPageComponents/DeliveryServicesCategoryCardComponent'
import HomeApplianceRepairCategoryCardComponent from '../../components/user/allCategoryPageComponents/HomeApplianceRepairCategoryCardComponent'
import LaundryServiceCategoryCardComponent from '../../components/user/allCategoryPageComponents/LaundryServiceCategoryCardComponent'
import BusinessServicesCategoryCardComponent from '../../components/user/allCategoryPageComponents/BusinessServicesCategoryCardComponent'
import EventsAndPartysCategoryCardComponent from '../../components/user/allCategoryPageComponents/EventsAndPartysCategoryCardComponent'
import CleaningServiceCategoryCardComponent from '../../components/user/allCategoryPageComponents/CleaningServiceCategoryCardComponent'
import ElectronicsRepairCategoryCardComponent from '../../components/user/allCategoryPageComponents/ElectronicsRepairCategoryCardComponent'
import TechnologyServicesCategoryCardComponent from '../../components/user/allCategoryPageComponents/TechnologyServicesCategoryCardComponent'
import HealthAndFitnessCategoryCardComponent from '../../components/user/allCategoryPageComponents/HealthAndFitnessCategoryCardComponent'
import BeautyServicesCategoryCardComponent from '../../components/user/allCategoryPageComponents/BeautyServicesCategoryCardComponent'

const AllCategoriesPage = () => {
  return (
    <div className='flex items-center justify-center p-4'>
    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <AllCategoryComponent />
      <DeliveryServicesCategoryCardComponent />
      <HomeApplianceRepairCategoryCardComponent />
      <LaundryServiceCategoryCardComponent />
      <BusinessServicesCategoryCardComponent />
      <EventsAndPartysCategoryCardComponent />
      <CleaningServiceCategoryCardComponent />
      <ElectronicsRepairCategoryCardComponent />
      <TechnologyServicesCategoryCardComponent />
      <HealthAndFitnessCategoryCardComponent />
      <BeautyServicesCategoryCardComponent />
    </div>
    </div>
  )
}

export default AllCategoriesPage
