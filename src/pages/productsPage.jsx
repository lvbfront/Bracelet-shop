import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import BigPicture from '../components/BigPicure';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="container mx-auto px-4 ">
            <h1 className="text-2xl font-bold text-gray-800 my-5">Our Products</h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Featured Products</h2>
            <ProductList searchTerm={searchTerm} category={category} showFeaturedOnly={true} />
            <BigPicture imgSrc="https://source.unsplash.com/random/400x300?bracelet"
            description="Enamel or leather bracelets, adorned with precious iconic details. Mix and match different styles and colors to create a new look."/>
            <h2 className="text-xl font-semibold text-gray-700 mt-14 mb-4 ">All Products</h2>
            <ProductList searchTerm={searchTerm} category={category} showFeaturedOnly={false} />
            <Footer/>
        </div>
    );
}

export default ProductsPage;
