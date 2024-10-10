import React from 'react'
import TransactionCard from './TransactionCard'
import bookings from '../../../utils/bookings/bookingsData';

const TransactionsPageUser = () => {
  const bookingsData = bookings
  const paidBookings = bookingsData.filter(booking => booking.payment === 'Paid');
  const serviceImg = "https://img.freepik.com/premium-photo/abstract-black-dark-wall_73523-3758.jpg?ga=GA1.1.1459516267.1711715282&semt=ais_hybrid"
  return (
    <div className='min-h-screen bg-light-gray flex items-center flex-col p-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-xl">
        {paidBookings.length === 0 ? (
          <div className="col-span-full text-center p-4">
            <p className="text-lg font-semibold">No Transactions available.</p>
          </div>
        ) : (
          paidBookings.map((booking, index) => {
            return (
              <TransactionCard
                key={index}
                serviceTitle={booking.title}
                category={booking.category}
                serviceImg={serviceImg}
                status={booking.payment}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default TransactionsPageUser
