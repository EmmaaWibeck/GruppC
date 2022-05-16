import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearProduct, getProductById } from '../store/actions/productDetailAction'
import { addToCart } from '../store/actions/cartActions'


const ProductDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById(id))

    return () => {
      dispatch(clearProduct())
    }

  }, [dispatch, id])

  const { loading, data: product, error } = useSelector(state => state.product)

  const template = ( product && 
    <div className='d-md-flex text-center mt-2 w-100'>
      
      <div className="img-container w-100 w-md-100">
        <img src={ product.image } className="image" alt="Product" />  
      </div>

      <div className='p-2 text-md-start mt-3 w-100 w-md-100 me-lg-5'>
        <h2>{ product.name }</h2>
        <p>{ product.desc }</p>
        <div className='d-md-flex justify-content-between'>
          <p className='text-danger h5 mb-3'>{ product.price } SEK</p>
          <button className='btn btn-info mb-3' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        </div>
      </div>

    </div>
  )

  if(error)
    return (
      <div>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      
      {template}
      {loading && <p>Loading... </p>}
      
    </div>
  )
}

export default ProductDetails