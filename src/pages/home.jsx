import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Hero from '../sections/hero';
import PopularProducts from '../sections/PopularProducts';



function Home() {
  const [showProduct, setShowProduct] = useState(false);

  // Corrected by adding the return statement
  return (
    <div className='relative'>

      <section className='xl:padding-1 wide:padding-r padding-b px-2'>
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProducts />

      </section>

      <section className=' pb-8 px-2'>
        <Footer />
      </section>
      
    </div>
  );
}

export default Home;
