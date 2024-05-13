import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { products as allProducts } from './assets/Data'; // Assuming all products are imported from a data file

function ProductList({ showFeaturedOnly = false }) {
    const [visibleProducts, setVisibleProducts] = useState(6); // Number of products to display initially

    // Filtering products based on 'isFeatured' property when 'showFeaturedOnly' is true
    const filteredProducts = showFeaturedOnly ? allProducts.filter(product => product.isFeatured) : allProducts;

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6); // Load 6 more products
    };

    const displayedProducts = filteredProducts.slice(0, visibleProducts);

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2">
                {displayedProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            {visibleProducts < filteredProducts.length && (
                <button 
                onClick={loadMoreProducts} 
                className="bg-gold-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 mx-auto block transition duration-300 ease-in-out shadow hover:shadow-md"
            >
                Load More
            </button>
            
            )}
        </div>
    );
}

export default ProductList;
