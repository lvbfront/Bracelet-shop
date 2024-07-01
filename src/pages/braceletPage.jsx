// BraceletPage.js
import React from 'react';
import BraceletCard from '../components/BraceletCard'; // Ensure the component file name matches the import
import { braceletData, brac } from '../components/assets/Data'; // Adjust the path as necessary
import BigPicture from '../components/BigPicure';

const BraceletPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center my-6">Bracelet Collection</h1>

            <BigPicture imgSrc={brac} description="Beautiful and elegant bracelets collection"></BigPicture>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-0 md:gap-4 lg:gap-4 xl:gap-6">
                {braceletData.map(bracelet => (
                    <BraceletCard key={bracelet.id} bracelet={bracelet} />
                ))}
            </div>
        </div>
    );
};

export default BraceletPage;
