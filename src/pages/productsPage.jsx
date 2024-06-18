import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Footer from '../components/footer'

import CategoryFilter from '../components/CategoryFilter';
import BigPicture from '../components/BigPicure';
import { Logo } from '../components/assets/Data';

const ProductsPage = () => {
    const [category, setCategory] = useState('All');


    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="container mx-auto px-4 ">
            <h1 className="text-2xl font-bold text-gray-800 my-5">Our Products</h1>
            <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Featured Products</h2>
            <ProductList category={category} showFeaturedOnly={true} />
            <BigPicture imgSrc={Logo}
            description="Enamel or leather bracelets, adorned with precious iconic details. Mix and match different styles and colors to create a new look."/>
            <h2 className="text-xl font-semibold text-gray-700 mt-14 mb-4 ">All Products</h2>
            <ProductList category={category} showFeaturedOnly={false} />
            <Footer/>
        </div>
    );
}

export default ProductsPage;
