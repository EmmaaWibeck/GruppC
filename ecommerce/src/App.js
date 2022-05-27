import './App.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import { ProtectedRoute } from './routes/ProtectedRoute'
import { checkUser } from './store/actions/authActions'
import Products from './views/Products';
import ProductDetails from './views/ProductDetail';
import Home from './views/Home';
import OrderView from './views/OrderView';
import LoginView from './views/LoginView';
import AdminView from './views/AdminView';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])


  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path ='/' element={ <Home /> } />
          <Route path ='/products' element={ <Products /> } />
          <Route path ='/products/:id' element={< ProductDetails />} />
          <Route path='/orders' element={ <OrderView /> } />
          <Route path='/login' element={ <LoginView /> } />
          <Route path='/admin' element={           
            <ProtectedRoute>
              <AdminView /> 
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
