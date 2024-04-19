import React from 'react'
import ProductList from '../components/ProductList';

const ProductsPage = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 my-5">Our Products</h1>
            <ProductList />
        </div>
    );
}

export default ProductsPage