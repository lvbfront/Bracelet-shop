import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './assets/Data';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-200 p-4 w-full top-0 z-30 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Wrap both logo and text in Link to make them clickable and navigate to home */}
        <Link to="/" className="flex items-center text-deep-purple-800 hover:text-gray-300" onClick={closeMenu}>
          <img src={Logo} alt="Store logo" className='w-10 h-10 mr-2' />
          <span className="font-bold text-xl">Bracelete Store</span>
        </Link>

        <div className="relative md:hidden">
          <button className="fixed right-4 top-4 z-50 text-deep-purple-800" onClick={toggleMenu}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
        )}

        {/* Sidebar menu for mobile */}
        <div className={`fixed inset-y-0 right-0 transform bg-white p-4 w-64 text-deep-purple-800 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={closeMenu} className="text-black mb-4">Close</button>
          <Link to="/" className="block hover:text-gray-300 py-2" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="block hover:text-gray-300 py-2" onClick={closeMenu}>Products</Link>
          <Link to="/newPage" className="block hover:text-gray-300 py-2" onClick={closeMenu}>New</Link>
          <Link to="/about" className="block hover:text-gray-300 py-2" onClick={closeMenu}>About</Link>
          <Link to="/NecklacesPage" className="block hover:text-gray-300 py-2" onClick={closeMenu}>قلاداتnecklaces</Link>
        </div>

        {/* Navigation for larger screens */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-300 px-3 py-2 rounded-md" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="hover:text-gray-300 px-3 py-2 rounded-md" onClick={closeMenu}>Products</Link>
          <Link to="/newPage" className="hover:text-gray-300 px-3 py-2 rounded-md" onClick={closeMenu}>New</Link>
          <Link to="/about" className="hover:text-gray-300 px-3 py-2 rounded-md" onClick={closeMenu}>About</Link>
          <Link to="/NecklacesPage" className="hover:text-gray-300 px-3 py-2 rounded-md" onClick={closeMenu}>necklaces</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
