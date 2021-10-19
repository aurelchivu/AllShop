import './styles/main.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='py-3 container'>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
