import { Link, NavLink } from 'react-router-dom'
import ShoppingCart from './shoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'
import loginImg from '../img/avatar.png'


const Navbar = () => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      {/* <!-- Container wrapper start --> */}
      <div className="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler text-light"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
            <Link to="/" className='navbar-brand mt-2 mt-lg-0'>
            <img className='logo' src={loginImg} alt="Logotype" />
            </Link>
          {/* <!-- Left links start --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li><NavLink to="/" className="nav-item nav-link p-1">Home</NavLink></li> */}
            <li><NavLink to="/products" className="nav-item nav-link p-1">Products</NavLink></li>
            <li><NavLink to="/login" className="nav-item nav-link p-1">Login</NavLink></li>
            <li><NavLink to="/register" className="nav-item nav-link p-1">Register</NavLink></li>
            <li><NavLink to="/admin" className="nav-item nav-link p-1">Admin</NavLink></li>
            <li><NavLink to="/orders" className="nav-item nav-link p-1">Orders</NavLink></li>

          </ul>
          {/* <!-- Left links end --> */}
        </div>

        {/* <!-- Right elements start --> */}
        {/* Jockes code from lession 9, start*/}
        <div className="d-flex align-items-center">

          <div className="dropdown">
            <span
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-shopping-cart"></i>
              {totalQuantity >= 1 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}

            </span>
            <ul
              className="dropdown-menu dropdown-menu-end shopping-cart"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <ShoppingCart />

            </ul>
          </div>
        </div>
        {/* Jockes code from lession 9, end*/}
        {/* <!-- Right elements end --> */}
      </div>
      {/* <!-- Container wrapper end --> */}
    </nav>
  )
}

export default Navbar