import React, { useState } from 'react';

function NewHero({ leftProduct, rightProduct }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-#585858 lg:my-20 lg:mx-32 rounded-lg h-3/4 md:h-screen xs:mt-10">
            {/* Main title for the section */}
            <div className="w-full text-center text-black text-xl font-semibold mt-5 mb-10">
                <p>إكتشف احدث الأساور</p>
            </div>
            <div className="flex flex-wrap justify-around items-center max-w-7xl w-full px-4">
                {/* Left Product Card */}
                <div
                    className="group w-1/2 p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110 cursor-pointer"
                    onClick={() => openModal(leftProduct)}
                >
                    <div className="text-center mb-2">
                        <span className="font-bold">{leftProduct.subtitle}</span>
                    </div>
                    <img
                        src={leftProduct.imgSrc}
                        alt={leftProduct.subtitle}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>

                {/* Right Product Card */}
                <div
                    className="group w-1/2 p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110 cursor-pointer"
                    onClick={() => openModal(rightProduct)}
                >
                    <div className="text-center mb-2">
                        <span className="font-bold">{rightProduct.subtitle}</span>
                    </div>
                    <img
                        src={rightProduct.imgSrc}
                        alt={rightProduct.subtitle}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✖
                        </button>
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-silver-200 p-4 rounded-lg">
                            <img
                                src={selectedProduct.imgSrc}
                                alt={selectedProduct.subtitle}
                                className="max-w-full h-auto rounded-lg shadow-md"
                            />
                            <div className="text-center mt-4">
                                <p className="text-lg font-semibold">{selectedProduct.subtitle}</p>
                                <p className="text-md text-gray-600">{selectedProduct.price}$</p>
                                <p className="text-sm text-gray-500 mt-2">{selectedProduct.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewHero;
