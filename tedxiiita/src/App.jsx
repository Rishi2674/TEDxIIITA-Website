import logo from './logo.svg';
import './App.css';
import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';

function App() {
  return (
    <div>
      {/* <Spinner/> */}
      <Navbar/>
      <Carousel/>
      <About/>
    </div>
  );
}

export default App;
