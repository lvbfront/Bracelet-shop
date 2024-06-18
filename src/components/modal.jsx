import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;

    // Function to stop the propagation of click events inside the modal content
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={onClose} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div onClick={stopPropagation} style={{
                position: 'relative',
                padding: 20,
                backgroundColor: '#fff',
                borderRadius: 5,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '80%',
                maxHeight: '80%',
                overflow: 'auto'
            }}>
                {children}
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    fontSize: 24,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                }}>×</button>
            </div>
        </div>
    );
};

export default Modal;
