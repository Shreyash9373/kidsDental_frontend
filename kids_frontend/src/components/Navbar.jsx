import React from 'react';
import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set to true if scrolled down
      } else {
        setIsScrolled(false); // Set to false if at the top
      }
    };

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-6  shadow-md bg-white bg-gradient-to-r bg-primary">
      {/* Logo Section */}
      {/* <div className="text-2xl font-bold text-blue-600">Kids Dental World</div> */}
      <a href="/"><img src={logo} alt="logo" className=" w-28 h-28"/></a>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu Section */}
      <ul className="hidden lg:flex space-x-6 text-lg font-medium">
        <li>
          <Link
            to="/"
            className={`cursor_toothbrush hover:text-gray-400 font-bold ${isActive('/') ? 'text-black font-bold' : 'text-gray-500'}`}
          >
            🦷 Home
          </Link>
        </li>
        <li>
          <Link
            to="/dentalServices"
            className={`cursor_toothbrush hover:text-gray-400 font-bold ${isActive('/dentalServices') ? 'text-black font-bold' : 'text-gray-500'}`}
          >
            🪥Services
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className={`cursor_toothbrush hover:text-gray-400 font-bold ${isActive('/About') ? 'text-black font-bold' : 'text-gray-500'}`}
          >
            🦸About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={`cursor_toothbrush hover:text-gray-400 font-bold ${isActive('/Contact') ? 'text-black font-bold' : 'text-gray-500'}`}
          >
            📍Contact
          </Link>
        </li>
      </ul>

      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-t from-[#6EC3F7] to-[#FFD700] via-white via:40%  text-black z-[9999] transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 shadow-lg `}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-l from-[#6EC3F7] to-[#FFD700] ">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="mt-4 space-y-6 px-6 text-lg font-semibold ">
          <li>
            <Link
              to="/"
              className={`hover:text-indigo-500 block ${isActive('/') ? 'text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg' : ''}`}
              onClick={toggleMobileMenu}
            >
              🦷Home
            </Link>
          </li>
          <li>
            <Link
              to="/dentalServices"
              className={`hover:text-indigo-500 block ${isActive('/dentalServices') ? 'text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg' : ''}`}
              onClick={toggleMobileMenu}
            >
              🪥Services
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={`hover:text-indigo-500 block ${isActive('/About') ? 'text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg' : ''}`}
              onClick={toggleMobileMenu}
            >
              🦸About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={`hover:text-indigo-500 block ${isActive('/Contact') ? 'text-indigo-500 font-bold bg-gray-200 p-2 rounded-lg' : ''}`}
              onClick={toggleMobileMenu}
            >
              📍Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
