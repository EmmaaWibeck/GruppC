import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = ({ order }) => {
  return (
    <div>
      <Link to={`/orders/${order._id}`}>
        <h2>{order._id}</h2>
        <p>{order.createdAt}</p>
      </Link>
    </div>
  )
}

export default OrderCard