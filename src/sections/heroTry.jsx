import React from 'react';
import { Link } from 'react-router-dom';
import { brac } from '../components/assets/Data'; // Ensure the path here matches where Data.js is relative to this file

const HeroT = () => {
  return (
    <>
        <div style={{ backgroundImage: `url(${brac})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="mb-6 w-full h-80 relative flex items-center justify-center">
        {/* Added flex, items-center, and justify-center to center the content */}
            <div className='text-center p-10'>
                <h1 className='text-white text-4xl lg:text-5xl font-bold shadow-lg' style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                    exxwarrrat shop
                </h1>
                <div className="mt-4">
                <Link to="/newPage" className="bg-white text-gray-800 py-2 px-4 rounded-full font-bold mr-2 shadow">Bracelets</Link>
                <Link to="/NecklacesPage" className="bg-white text-gray-800 py-2 px-4 rounded-full font-bold shadow">Necklaces</Link>
              </div>
            </div>
        </div>
    </>
  );
}

export default HeroT;
