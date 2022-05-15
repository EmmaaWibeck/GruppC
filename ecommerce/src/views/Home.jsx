import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Link to='/products'>
        <div className='entry-image d-flex justify-content-center'>
            <h1 className='align-text-bottom mt-auto text-dark'>eCommerce</h1>
        </div>
    </Link>
  )
}

export default Home