import React, { useState } from 'react';
import Modal from './modal';

const ProductCard = ({ product }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(product.imgURL);

    const openModal = () => {
        setCurrentImage(product.imgURL);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

    const switchImage = (imgURL) => {
        setCurrentImage(imgURL);
    };

    return (
        <div className="max-w-xs w-full lg:max-w-sm rounded overflow-hidden shadow-lg m-2 relative cursor-pointer">
            <div className="h-48 bg-gradient-to-r from-blue-50 to-silver-200 flex items-center justify-center" onClick={openModal}>
                <img src={product.imgURL} alt={product.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="font-bold text-xl text-white">{product.name}</div>
                    <p className="text-white text-base">
                        {product.description}
                    </p>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        Price: ${product.price}
                    </span>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-silver-200 p-4 rounded-lg">
                    <img src={currentImage} alt={product.name} className="max-w-full h-auto rounded-lg shadow-md" />
                    <div className="text-center mt-4">
                        <p className="text-lg font-semibold">{product.name}</p>
                        <p className="text-md text-gray-600">{product.price}$</p>
                        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                    </div>
                    <div className="flex mt-4 overflow-x-auto">
                        {product.images && product.images.map(image => (
                            <button key={image.id} onClick={() => switchImage(image.url)} className="focus:outline-none mr-2">
                                <img src={image.url} alt="Thumbnail" className="w-20 h-20 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" />
                            </button>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProductCard;
