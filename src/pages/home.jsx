import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Hero from '../sections/hero'; // Ensure correct casing if your file name is 'Hero'
import ProductList from '../components/ProductList';

function Home() {
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className='relative'>
      <section className='xl:px-20 lg:px-10 md:px-5 px-2'> {/* Adjusted padding for responsive design */}
        <Hero />
      </section>

      <section className='px-2 py-8'> {/* Consistent padding and margin */}
        <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-semibold'>
            Our <span className='text-gray-400'>Popular</span> Products
          </h2>
          <p className='lg:max-w-lg mt-2 text-gray-600'>
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
          </p>
        </div>
        <ProductList/>
      </section>

      <section className='pb-8 px-2'>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default Home;
