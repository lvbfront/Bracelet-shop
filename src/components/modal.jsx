import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;

    // Prevent the modal from closing when clicking inside it
    const handleModalContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-lg max-w-md mx-auto my-4  overflow-auto"
                onClick={handleModalContentClick}
            >
                {children}
                <button 
                    className="absolute top-0 right-0 p-2 text-3xl font-semibold text-gray-700 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Modal;
