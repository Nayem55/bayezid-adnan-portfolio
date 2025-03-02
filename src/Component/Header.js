import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full sm:px-32 z-10 bg-black bg-opacity-40 px-4 py-2 sm:py-8 flex justify-between items-center">
      {/* Left Links */}
      <div className="flex space-x-10 hidden lg:flex">
        <Link to="/" className="text-white font-bold ease-in-out duration-200 hover:text-black">Home</Link>
        {/* <Link to="#services" className="text-white font-bold ease-in-out duration-200 hover:text-black">Services</Link> */}
        <Link to="/portfolio" className="text-white font-bold ease-in-out duration-200 hover:text-black">Portfolio</Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center flex-grow">
        <Link to="/" className="text-white text-2xl font-bold">BAYEZID ADNAN</Link>
      </div>

      {/* Right Links */}
      <div className="flex space-x-10 hidden lg:flex">
        <Link to="/about" className="text-white font-bold ease-in-out duration-200 hover:text-black">About</Link>
        <Link to="/contact" className="text-white font-bold ease-in-out duration-200 hover:text-black">Contact</Link>
        {/* <Link to="#blog" className="text-white font-bold ease-in-out duration-200 hover:text-black">Blog</Link> */}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-90 z-20 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 pt-24">
          <Link to="#home" className="text-white text-xl" onClick={toggleMenu}>Home</Link>
          <Link to="#services" className="text-white text-xl" onClick={toggleMenu}>Services</Link>
          <Link to="#portfolio" className="text-white text-xl" onClick={toggleMenu}>Portfolio</Link>
          <Link to="#about" className="text-white text-xl" onClick={toggleMenu}>About</Link>
          <Link to="#contact" className="text-white text-xl" onClick={toggleMenu}>Contact</Link>
          <Link to="#blog" className="text-white text-xl" onClick={toggleMenu}>Blog</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
