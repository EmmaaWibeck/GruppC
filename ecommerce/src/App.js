import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Products from './views/Products';
import ProductDetails from './views/ProductDetail';
import Home from './views/Home';

import OrderView from './views/OrderView';
import LoginView from './views/LoginView';
// import RegisterForm from './components/RegisterForm';
//test auth
import { checkUser } from './store/actions/authActions'
import { ProtectedRoute } from './routes/ProtectedRoute'
import AdminView from './views/AdminView';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'



function App() {
  //test auth
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getEvents())
    dispatch(checkUser())
  }, [dispatch])


  return (
    <div className="App">
      <Navbar />

     <div className='container'>
       <Routes>
        <Route path ='/' element={ <Home /> } />
         {/* <Route path ='/' element={<Products />} /> */}
        <Route path ='/products' element={ <Products /> } />
        <Route path ='/products/:id' element={< ProductDetails />} />
        <Route path='/orders' element={ <OrderView /> } />
        <Route path='/login' element={ <LoginView /> } />
        {/* <Route path='/register' element={ <RegisterForm /> } /> */}
        {/* test auth: */}
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
