import React from 'react';
import Navbar from '../components/Navbar';

import ProductCard from '../components/ProductCard';
import MultiHero from '../sections/multisecHero'
import { products } from '../components/assets/Data';
import { Logo, ekka, neck, brac } from '../components/assets/Data';


function Home() {
  return (
    <div className="relative bg-gray-100">
      

      {/* Hero Section */}
      <section className="xl:px-20 lg:px-10 md:px-5 px-2 pt-10 bg-white">
        <MultiHero />
      </section>


      {/* Popular Products Section */}
      <section className="px-2 py-8 mt-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            Our <span className="text-gray-400">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 text-gray-600 mx-auto">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default Home;
