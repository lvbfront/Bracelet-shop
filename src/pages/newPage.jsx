import React from 'react';
import NewHero from '../sections/newHero';
import ProductList from '../components/ProductList';
import Footer from '../components/footer';
import { neck, Logo } from '../components/assets/Data';
function NewPage() {

    const leftProduct = {
        imgSrc: neck,
        subtitle: "Elegant Gold Bracelet",
        link: "/products/10"
    };

    const rightProduct = {
        imgSrc: Logo,
        subtitle: "Stylish Silver Bracelet",
        link: "/products/11"
    };

    return (

        <div className=" min-h-screen">
            <NewHero leftProduct={leftProduct} rightProduct={rightProduct} />

            {/* Section for new arrivals with more structured and appealing layout */}
            <section className='px-4 py-12 mx-auto max-w-7xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg my-8'>
                <h2 className="text-2xl font-semibold text-center mb-6">اساورنا الجديدة</h2>
                <ProductList showNewOnly={true} />
            </section>

            {/* Section for featured products with separate styling */}
            <section className='px-4 py-12 mx-auto max-w-7xl bg-white shadow-lg rounded-lg my-8'>
                <h2 className="text-2xl font-semibold text-center mb-6">اساورنا المميزة</h2>
                <ProductList showFeaturedOnly={true} />
            </section>
            <Footer/>
        </div>
    );
}

export default NewPage;
