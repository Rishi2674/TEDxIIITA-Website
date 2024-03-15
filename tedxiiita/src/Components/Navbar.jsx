import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import tedx from '../assets/tedxiiita.png'
import UnderlineEffect from './UnderlineEffect';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between bg-gray-700 bg-opacity-40 shadow-md py-5 w-full font-poppins  ">
      
      {/* Logo */}
       <div className='p-1 ml-20 '>
          <img className='h-12' src={tedx}/>
        </div>
      <div className="px-4 flex items-center justify-center">

       
       
        {/* Desktop Site */}
        <div className="hidden lg:flex items-center">
          <Link to="/" className="px-4 py-2 text-xl cursor-pointer hover:underline text-white  hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8">
          Home
            </Link>
          <Link to="/speakers" className="px-4 py-2 text-xl hover:underline hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8 text-white ">Speakers</Link>
          <Link to="/Gallery" className="px-4 py-2 text-xl hover:underline hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8 text-white ">Gallery</Link>
          <Link to="/past-speakers" className="px-4 py-2 text-xl hover:underline hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8 text-white ">Past Speakers</Link>
          <a href="#contact" className="pl-4 pr-7 py-2 text-xl hover:underline hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8 text-white" >Contact</a>
          <Link to="/register" className=" text-white font-semibold px-4 py-2 text-lg  bg-red-600 hover:bg-red-300 rounded-md">REGISTER</Link>
        </div>

        {/* Mobile SIte Menu Button */}
        <button onClick={handleMenuToggle} className="lg:hidden text-black focus:outline-none">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>


      {isOpen && (
        <div className="lg:hidden mt-2 bg-gray-700 bg-opacity-40 shadow-md rounded-md font-poppins">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link to="/" className="block px-4 py-2  text-white font-semibold hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8">Home</Link>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2  text-white font-semibold hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8">Contact</a>
            </li>
            <li>
              <Link to="/register" className="block px-4 py-2  text-white font-semibold hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8">Past Speakers</Link>
            </li>
            <li>
              <Link to="/past-speakers" className="block px-4 py-2  text-white font-semibold hover:decoration-red-500 hover:decoration-[3px] hover:underline-offset-8">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
