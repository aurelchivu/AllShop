import './styles/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main class='py-3 container'>
        <h2>Welcome to AllShop</h2>
      </main>
      <Footer />
    </>
  );
};

export default App;
