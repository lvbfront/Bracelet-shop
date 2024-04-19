import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div>
            
            <Link to={`/products/${product.id}`} className="border p-4 rounded-lg shadow-lg block hover:bg-gray-100">
                <img src={product.imgURL} alt="" />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <span className="text-green-500">{product.price}</span>
            
            </Link>
        </div>
    );
}

export default ProductItem;
