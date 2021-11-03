import './styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='py-3 container'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/products/:id' component={ProductScreen} />
          <Route path='*' component={() => '404 Not found.'} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
