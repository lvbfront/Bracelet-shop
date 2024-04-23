import React from 'react'
import ProductList from '../components/ProductList';
import Footer from '../components/footer'

const ProductsPage = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 my-5">Our Products</h1>
            <ProductList />
            <Footer/>
        </div>
    );
}

export default ProductsPage