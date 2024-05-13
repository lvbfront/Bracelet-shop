import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './assets/Data';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200 p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="store logo" className='w-10 h-10 mx-4' />
          <div className="text-deep-purple-800 font-bold mr-10">
            <Link to="/" className="text-deep-purple-800 hover:text-gray-300 px-3 py-2 rounded-md">Bracelete Store</Link>
          </div>
          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

        <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-deep-purple-800 hover:text-gray-300 px-3 py-2 rounded-md">Home</Link>
          <Link to="/products" className="text-deep-purple-800 hover:text-gray-300 px-3 py-2 rounded-md">Products</Link>
          <Link to="/Products" className="text-deep-purple-800 hover:text-gray-300 px-3 py-2 rounded-md">New</Link>
          <Link to="/about" className="text-deep-purple-800 hover:text-gray-300 px-3 py-2 rounded-md">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
