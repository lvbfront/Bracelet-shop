import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={product.imageUrl} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <div className="flex items-center">
          <span className="text-gray-900 font-bold text-lg">{`$${product.price}`}</span>
          <span className="text-gray-500 text-sm line-through ml-2">{`$${product.originalPrice}`}</span>
        </div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {product.features.map((feature) => (
          <span key={feature} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {feature}
          </span>
        ))}
        <button>show more</button>
      </div>
    </div>
  );
};

export default Product;
