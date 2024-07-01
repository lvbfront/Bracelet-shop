import React, { useState } from 'react';
import Modal from '../components/modal';  // Make sure the modal component is properly implemented

const RingsCard = ({ ring }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(ring.imageUrl);

    const openModal = () => {
        setCurrentImage(ring.imageUrl);  // Reset to main image when modal opens
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

    const switchImage = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    return (
        <div className="max-w-xs w-full lg:max-w-sm rounded overflow-hidden shadow-lg m-2 relative cursor-pointer">
            <div className="h-64 bg-gradient-to-r from-blue-50 to-silver-200 flex items-center justify-center" onClick={openModal}>
                <img src={currentImage} alt={ring.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="font-bold text-xl text-white">{ring.name}</div>
                    <p className="text-white text-sm">
                        {ring.description}
                    </p>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {ring.price}
                    </span>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-silver-200">
                    <img src={currentImage} alt={ring.name} className="max-w-full h-auto rounded-lg shadow-md" />
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-semibold">{ring.name}</h2>
                        <p className="text-xl">{ring.price}</p>
                        <p className="mt-2">{ring.description}</p>
                        <div className="flex mt-4 overflow-x-auto">
                            {ring.images && ring.images.map(image => (
                                <button key={image.id} onClick={() => switchImage(image.url)} className="focus:outline-none mr-2">
                                    <img src={image.url} alt="Thumbnail" className="w-20 h-20 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default RingsCard;
