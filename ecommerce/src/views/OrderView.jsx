import { useSelector } from 'react-redux'
import OrderCard from '../components/OrderCard'


const OrderView = () => {

  const { data: orders, loading } = useSelector(state => state.orders)

  return (
    <div>
      <div className='mt-5 mb-2 pt-3'> 
      <h1>Order History</h1>
      </div>

        { loading && <p>Loading...</p>}
        { orders.map(order => <OrderCard key={order.id} post={order} />) }

      <div>
        {/* <OrderCard /> */}
      </div>
    </div>
  )
}

export default OrderView