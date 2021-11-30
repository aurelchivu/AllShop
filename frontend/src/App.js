import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/products/:id' element={<ProductScreen />} />
          <Route path='/cart/*' element={<CartScreen />} />
          <Route path='/login' element={<LogInScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/placeorder' element={<PlaceOrderScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='*' element={<h3>404 Not found.</h3>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
