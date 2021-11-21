import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import LogInScreen from './screens/LogInScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/products/:id' element={<ProductScreen />} />
          <Route path='/cart/*' element={<CartScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LogInScreen />} />
          <Route path='*' element={<h3>404 Not found.</h3>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
