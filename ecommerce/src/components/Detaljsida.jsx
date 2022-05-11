import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { useParams } from 'react-router-dom'
// import { getProductByID } from '../../../api/models/products/porductModel'

const Detaljsida = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch((id))
    // getProductByID innanför innan

  }, [dispatch, id])

  const { data: product } = useSelector(state => state.product)
  
  return (
    <div className="container w-75 mt-5">
    <div className="card text-center bg-dark">
    <img src="{product.image}" className="card-img-top w-50 m-2 d-flex justify-content-center"/>
    <div className="card-body m-2">
      <h5 className="card-title text-light">{product.name}</h5> 
      <p className="card-text text-light">{product.desc}</p>
      <p className="card-text text-warning">{product.price} SEK</p>
      <button className='btn btn-primary' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  </div>
  </div>
 
  )
}

export default Detaljsida

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../store/actions/cartActions'
// import { useParams } from 'react-router-dom'

// const Detaljsida = ({product}) => {

//   const dispatch = useDispatch()

// const Detaljsida = () => {
//   return (
//     <div className="container w-75 mt-5">
//     <div className="card text-center bg-dark">
//     <img src="{product.image}" className="card-img-top w-50 m-2 d-flex justify-content-center"/>
//     <div className="card-body m-2">
//       <h5 className="card-title text-light">Product name {product.name.id}</h5> 
//       <p className="card-text text-light">Description of the product {product.desc.id}</p>
//       <p className="card-text text-warning">Price SEK {product.price.id}</p>
//       <button className='btn btn-primary' onClick={() => dispatch(addToCart(product.id))}>Add To Cart</button>
//     </div>
//   </div>
//   </div>
 
//   )
// }
// }

// export default Detaljsida


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Detaljsida = ({ product }) => {
//   return (
//       <Link className='product' to={`/products/${product.id}`}>
//       <div className="card-body m-2">
//       <h5 className="card-title text-light">{product.name}</h5> 
//       <p className="card-text text-light">{product.desc}</p>
//       <p className="card-text text-warning">{product.price} SEK</p>
//       <button className='btn btn-primary' onClick={() => dispatch(addToCart(product.id))}>Add To Cart</button>
//       </div>
//       </Link>
//   )
// }

// export default Detaljsida