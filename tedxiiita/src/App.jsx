import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import PastSpeakers from './Pages/PastSPeakers'
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Timer from './Components/Timer';
import Maps from './Components/Maps';
import Footer from './Components/Footer';
import ContactForm from './Components/Contact';
import Team from './Components/Teams/Team'

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
    
     
      <Route exact path = "/" element = {
        <>
        {/* <Spinner/> */}
      
      <Carousel/>
      <About/>
      <Timer/>
      <ContactForm/>
      {/* <div className='px-4'>
      <Maps/>

      </div> */}

      <Footer/>

        </>
      }/>
      <Route exact path = "/past-speakers" element={<PastSpeakers/>}/>
      <Route exact path = "/register" element={
        <div>
          {/* <Navbar/> */}
          <Register/>
          <Timer/>
          <Footer/>
      
        </div>
      }/>
      <Route exact path = "/Gallery" element={<Team/>}/>
    </Routes>
    </>
  );
}

export default App;
