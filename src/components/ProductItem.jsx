import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div className="flex flex-col items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full overflow-hidden relative">
            <Link to={`/products/${product.id}`} className="w-full text-center group">
                <div className="w-full h-48 overflow-hidden relative">
                    <img src={product.imgURL} alt={product.name} className="w-full h-full object-cover object-center transform group-hover:scale-110 transition duration-300 ease-in-out"></img>
                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-transparent text-white">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-sm">{product.description}</p>
                        <span className="text-lg font-bold">{product.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
