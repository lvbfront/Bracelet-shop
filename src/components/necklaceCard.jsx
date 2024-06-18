import React, { useState } from 'react';
import Modal from '../components/modal'; 

const NecklaceCard = ({ necklace }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="max-w-xs w-full lg:max-w-sm rounded overflow-hidden shadow-lg m-2 relative cursor-pointer">
            <div className="h-48 bg-gray-200 flex items-center justify-center" onClick={openModal}>
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
                <img src={necklace.imageUrl} alt={necklace.name} className="max-w-full max-h-full" />
            </Modal>
        </div>
    );
};

export default NecklaceCard;