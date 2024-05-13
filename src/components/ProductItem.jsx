import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full overflow-hidden">
            <Link to={`/products/${product.id}`} className="w-full text-center group">
                <div className="w-full h-48 overflow-hidden">
                    <img src={product.imgURL} alt={product.name} className="w-full h-full object-cover object-center transform group-hover:scale-110 transition duration-300 ease-in-out"></img>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <span className="text-lg font-bold text-green-500">{product.price}</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
