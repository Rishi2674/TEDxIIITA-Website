import logo from './logo.svg';
import './App.css';
import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Timer from './Components/Timer';

function App() {
  return (
    <div>
      {/* <Spinner/> */}
      <Navbar/>
      <Carousel/>
      <About/>
      <Timer/>
      <Routes>
      <Route path = "/register" element={<Register/>} />
      </Routes> 
    </div>
  );
}

export default App;
