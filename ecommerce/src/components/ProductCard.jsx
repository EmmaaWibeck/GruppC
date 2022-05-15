// import { useDispatch } from 'react-redux'
// import { addToCart } from '../store/actions/cartActions'

import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {

// const dispatch = useDispatch()

  return (
    <div className="col">


        <div className="card h-100">

        <Link to={`/products/${product._id}`} className="text-dark" >
            <div className="img-container">
                <img src={product.image} className="image" alt="Product" />  
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                {product.short}
                </p>
                {/* <div className='d-flex justify-content-between align-items-center'> */}

                    {/* <Link to={`/products/${product._id}`}> */}
                    {/* <button className='btn btn-info'>To details...</button> */}
                    {/* </Link> */}

                    {/* <button className='btn btn-info' onClick={() => dispatch(addToCart(product))}>Add To Cart</button> */}
                    <p className='text-danger h5 m-0'>{product.price} SEK</p>
                {/* </div> */}
            </div>
        </Link>

        </div>


    </div>
  )
}

export default ProductCard