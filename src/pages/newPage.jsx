import React from 'react';
import NewHero from '../sections/newHero';
import ProductList from '../components/ProductList';

function NewPage() {

    const leftProduct = {
        imgSrc: "https://source.unsplash.com/random/400x300?bracelet",
        subtitle: "Elegant Gold Bracelet",
        link: "/products/10"
    };

    const rightProduct = {
        imgSrc: "https://source.unsplash.com/random/400x300?pen",
        subtitle: "Stylish Silver Bracelet",
        link: "/products/11"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <NewHero leftProduct={leftProduct} rightProduct={rightProduct} />

            {/* Section for new arrivals with more structured and appealing layout */}
            <section className='px-4 py-12 mx-auto max-w-7xl'>
                <h2 className="text-2xl font-semibold text-center mb-6">Our New Products</h2>
                <ProductList showNewOnly={true} />
            </section>

            {/* Section for featured products with separate styling */}
            <section className='px-4 py-12 mx-auto max-w-7xl bg-white shadow-lg rounded-lg my-8'>
                <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
                <ProductList showFeaturedOnly={true} />
            </section>
        </div>
    );
}

export default NewPage;
