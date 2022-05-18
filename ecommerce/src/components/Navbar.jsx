import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutUser } from '../store/actions/authActions'

const Navbar = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.auth.token)
    
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
    
        {/* <!-- Collapsible wrapper start --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
            <Link to="/" className='navbar-brand mt-2 mt-lg-0'>LOGO</Link>
          {/* <!-- Left links start --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><NavLink to="/" className="nav-item nav-link p-1">Home</NavLink></li>
            { isAuth      
              ? (<>
                {/* <li><NavLink to="/create" className="nav-link" >Create</NavLink></li>'' */}
                <li><Link onClick={() => dispatch(logoutUser())} to="/login" className="nav-item nav-link p-1">Logout</Link></li>
                </>)

              : <li><NavLink to="/login" className="nav-item nav-link p-1" >Login</NavLink></li>
            }
          </ul>
          {/* <!-- Left links end --> */}
        </div>

        {/* <!-- Collapsible wrapper start --> */}
        {/* <!-- Right elements start --> */}
        <div className="d-flex align-items-center">
          {/* <!-- Icon --> */}
          <Link to="/" className="text-reset me-3">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          {/* <!-- Avatar --> */}
          <div className="dropdown">
            <Link
              to="/"
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
{/*             <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li><NavLink to="/" className="dropdown-item">My profile</NavLink></li>
              <li><NavLink to="/" className="dropdown-item">Settings</NavLink></li>
              <li><NavLink to="/" className="dropdown-item">Logout</NavLink></li>
            </ul> */}
          </div>
        </div>
        {/* <!-- Right elements end --> */}
      </div>
      {/* <!-- Container wrapper end --> */}
    </nav>
  )
}

export default Navbar