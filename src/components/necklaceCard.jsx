import React, { useState } from 'react';
import Modal from '../components/modal';

const NecklaceCard = ({ necklace }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(necklace.imageUrl);

    const openModal = () => {
        setCurrentImage(necklace.imageUrl);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

    const switchImage = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    return (
        <div className="max-w-xs w-full lg:max-w-sm rounded overflow-hidden shadow-lg m-2 relative cursor-pointer">
            <div className="h-48 bg-gradient-to-r from-blue-50 to-silver-200 flex items-center justify-center" onClick={openModal}>
                <img src={necklace.imageUrl} alt={necklace.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="font-bold text-xl text-white">{necklace.name}</div>
                    <p className="text-white text-base">
                        {necklace.description}
                    </p>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        Price: ${necklace.price}
                    </span>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-silver-200 p-4 rounded-lg">
                    <img src={currentImage} alt={necklace.name} className="max-w-full h-auto rounded-lg shadow-md" />
                    <div className="text-center mt-4">
                        <p className="text-lg font-semibold">{necklace.name}</p>
                        <p className="text-md text-gray-600">{necklace.price}$</p>
                        <p className="text-sm text-gray-500 mt-2">{necklace.description}</p>
                    </div>
                    <div className="flex mt-4 overflow-x-auto">
                        {necklace.images && necklace.images.map(image => (
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

export default NecklaceCard;
