import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './Button';
import { arrowRight } from './assets/icons';
import { Data_product, products } from './assets/Data';
import Footer from './footer';

function ProductDetailPage() {
    // Extract productId from URL parameters
    const { productId } = useParams();

    // Find the product in the products list by ID
    const product = products.find(p => p.id.toString() === productId);

    const [selectedImage, setSelectedImage] = useState(product?.imgURL);
    // Render a not found message if product doesn't exist
    if (!product) {
        return <div>Product not found!</div>;
    }

    // Main product detail layout
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <img src={selectedImage} alt={`${product.name} image`} className="max-w-xs md:max-w-sm rounded-lg shadow-lg" />
                <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-2">
                    <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-lg">{product.description}</p>
                    <p className="text-lg font-bold text-green-500">{product.price}</p>
                </div>
            </div>

            
            <div className="flex justify-center space-x-1 mt-4">
                {product.images?.map(image => (
                    <img key={image.id} src={image.url} alt="Thumbnail" className="w-20 h-20 rounded border border-gray-300 cursor-pointer hover:border-blue-500"
                        onClick={() => setSelectedImage(image.url)} />
                ))}
            </div>


            <div className="text-center my-8">
                <p className="text-xl font-semibold mb-4">اشتري الان</p>
                <div className="flex justify-center items-center space-x-4">
                    <Button label="Buy Now!" iconURL={arrowRight} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out" />
                    <Link to="/products">
                        <Button label="Go Back" iconURL={arrowRight} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out" />
                    </Link>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default ProductDetailPage;
