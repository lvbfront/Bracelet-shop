import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HeroSection displays two images with subtitles, each linking to a product detail page.
 * @param {Object} leftProduct - Contains imgSrc, subtitle, and link for the left product.
 * @param {Object} rightProduct - Contains imgSrc, subtitle, and link for the right product.
 */
function NewHero({ leftProduct, rightProduct }) {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Left Product */}
                <div className="flex flex-col items-center w-1/2 px-2">
                    <Link to={leftProduct.link}>
                        <img src={leftProduct.imgSrc} alt={leftProduct.subtitle} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
                        <h2 className="text-xl text-gray-800 font-bold mt-2">{leftProduct.subtitle}</h2>
                    </Link>
                </div>

                {/* Right Product */}
                <div className="flex flex-col items-center w-1/2 px-2">
                    <Link to={rightProduct.link}>
                        <img src={rightProduct.imgSrc} alt={rightProduct.subtitle} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
                        <h2 className="text-xl text-gray-800 font-bold mt-2">{rightProduct.subtitle}</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewHero;
