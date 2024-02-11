import logo from './logo.svg';
import './App.css';
import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div>
      <Spinner/>
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;
