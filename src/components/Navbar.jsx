import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold mr-10">Logo</div>
          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

        <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Products</Link>
          <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
