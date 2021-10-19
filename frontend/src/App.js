import './styles/main.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/product/:id' component={ProductScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
