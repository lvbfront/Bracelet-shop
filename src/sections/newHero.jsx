import React from 'react';
import { Link } from 'react-router-dom';

function NewHero({ leftProduct, rightProduct }) {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-#585858 lg:my-20 lg:mx-32 rounded-lg h-3/4 md:h-screen xs:mt-10">
            {/* Main title for the section now within a normal flow above the images */}
            <div className="w-full text-center text-black text-xl font-semibold mt-5 mb-10">
                <p>إكتشف احدث الأساور</p>
            </div>
            <div className="flex flex-wrap justify-around items-center max-w-7xl w-full px-4">
                {/* Left Product Card */}
                <div className="group w-1/2 p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110">
                    <Link to={leftProduct.link} className="flex flex-col items-center text-black">
                        <div className="text-center mb-2">
                            <span className="font-bold">{leftProduct.subtitle}</span>
                        </div>
                        <img src={leftProduct.imgSrc} alt={leftProduct.subtitle} className="rounded-lg shadow-lg w-full h-auto"/>
                    </Link>
                </div>

                {/* Right Product Card */}
                <div className="group w-1/2 p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110">
                    <Link to={rightProduct.link} className="flex flex-col items-center text-black">
                        <div className="text-center mb-2">
                            <span className="font-bold">{rightProduct.subtitle}</span>
                        </div>
                        <img src={rightProduct.imgSrc} alt={rightProduct.subtitle} className="rounded-lg shadow-lg w-full h-auto"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewHero;
