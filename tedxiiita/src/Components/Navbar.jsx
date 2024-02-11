import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 bg-gray-700 bg-opacity-40 shadow-md py-5 w-full  ">
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center font-bold text-red-600">
          <Link to="/" className='text-3xl'>TEDxIIITA</Link>
        </div>

        {/* Desktop Site */}
        <div className="hidden lg:flex items-center">
          <Link to="/" className="px-4 py-2 text-xl hover:underline text-white font-bold" activeClassName="underline decoration-red-500">Home</Link>
          <Link to="/speakers" className="px-4 py-2 text-xl hover:underline" activeClassName="underline decoration-red-500">Speakers</Link>
          <Link to="/Gallery" className="px-4 py-2 text-xl hover:underline" activeClassName="underline decoration-red-500">Gallery</Link>
          <Link to="/past-speakers" className="px-4 py-2 text-xl hover:underline" activeClassName="underline decoration-red-500">Past Speakers</Link>
          <Link to="/contact" className="pl-4 pr-7 py-2 text-xl hover:underline" activeClassName="underline decoration-red-500">Contact</Link>
          <Link to="/contact" className=" text-white font-semibold px-4 py-2 text-xl hover:underline bg-red-600 rounded-md" activeClassName="underline decoration-red-500">REGISTER</Link>
        </div>

        {/* Mobile SIte Menu Button */}
        <button onClick={handleMenuToggle} className="lg:hidden text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white shadow-md rounded-md">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
            </li>
            <li>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
            </li>
            <li>
              <Link to="/past-speakers" className="block px-4 py-2 hover:bg-gray-100">Past Speakers</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
