import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import {arrowRight} from './assets/icons'
import { Link } from 'react-router-dom';
import {Data_product, products} from './assets/Data'

function ProductDetailPage() {
    const { productId } = useParams();
    const product = products.find(p => p.id.toString() === productId);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <img src={product.imgURL} alt={`${product.name} image`} className="max-w-xs md:max-w-sm rounded-lg shadow-lg" />
            <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-lg">{product.description}</p>
            <p className="text-lg font-bold text-green-500">{product.price}</p>
            </div>
            
        </div>
        <p>اشتري الان</p>
        <Button label="buy now!" iconURL={arrowRight} className="ml-5 pl-7"/>
        <Link to="/products">
            <Button label="Go Back " iconURL={arrowRight} className="ml-5 pl-7"/>
        </Link>
        
        </div>

    );
}

export default ProductDetailPage;
