import React from 'react'
import OrderCard from '../components/OrderCard'

const OrderView = () => {
  return (
    <div>
      <div className='mt-5 mb-2 pt-3'> 
      <h1>Order History</h1>
      </div>
      <div>
        <OrderCard />
      </div>
    </div>
  )
}

export default OrderView