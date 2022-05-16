import {Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Products from './views/Products';
import ProductDetails from './views/ProductDetail';
import Home from './views/Home';

import OrderView from './views/OrderView';


function App() {
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
       </Routes>
     </div>
    </div>
  );
}

export default App;
