// src/components/Navbar.js
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex  items-center">
        <div className="text-white font-bold">Logo</div>

        <div className="flex justify-center items-end">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          {/* Add more links as needed */}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
