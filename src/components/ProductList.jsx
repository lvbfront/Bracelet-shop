import React from 'react';
import ProductItem from './ProductItem';
import {Data_product, products} from './assets/Data'



function ProductList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
                
            ))}
        </div>
    );
}

export default ProductList;
