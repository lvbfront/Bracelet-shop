import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Hero from '../sections/hero'; // Ensure correct casing if your file name is 'Hero'
import ProductList from '../components/ProductList';
import HeroT from '../sections/heroTry';

function Home() {
  return (
    <div className='relative'>
      <section className='xl:px-20 lg:px-10 md:px-5 px-2 pt-10'> {/* Adjust padding and add enough padding-top */}
        <HeroT />
      </section>

      <section className='px-2 py-8 mt-8'> {/* Added margin-top for additional spacing */}
        <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-semibold'>
            Our <span className='text-gray-400'>Popular</span> Products
          </h2>
          <p className='lg:max-w-lg mt-2 text-gray-600'>
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
          </p>
        </div>
        <ProductList />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
