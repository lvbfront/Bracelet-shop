import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { products as allProducts } from './assets/Data'; // Assuming all products are imported from a data file

function ProductList({ showFeaturedOnly = false, showNewOnly = false }) {
    const [visibleProducts, setVisibleProducts] = useState(6); // Number of products to display initially

    // Apply filtering based on the provided flags
    let filteredProducts = allProducts;
    if (showFeaturedOnly) {
        filteredProducts = filteredProducts.filter(product => product.isFeatured);
    }
    if (showNewOnly) {
        filteredProducts = filteredProducts.filter(product => product.isNew);
    }

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6); // Load 6 more products
    };

    const displayedProducts = filteredProducts.slice(0, visibleProducts);

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
                {displayedProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            {visibleProducts < filteredProducts.length && (
                <button 
                    onClick={loadMoreProducts} 
                    className="bg-silver-200 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-full mt-4 mx-auto block transition duration-300 ease-in-out shadow hover:shadow-md"
                >
                    تحميل المزيد
                </button>
            )}
        </div>
    );
}

export default ProductList;
