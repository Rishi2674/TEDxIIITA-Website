import Spinner from './Components/Spinner/Spinner';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import PastSpeakers from './Pages/PastSPeakers'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path = "/" element = {
        <>
        {/* <Spinner/> */}
      <Navbar/>
      <Carousel/>
      <About/>
        </>
      }/>
      <Route exact path = "/past-speakers" element={<PastSpeakers/>}/>
    </Routes>
  );
}

export default App;
