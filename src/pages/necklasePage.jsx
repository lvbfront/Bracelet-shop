import React from 'react';
import NecklaceCard from '../components/necklaceCard'; // Ensure the component file name matches the import
import { necklaces, neck } from '../components/assets/Data'; // Adjust the path as necessary
import BigPicture from '../components/BigPicure';

const NecklacesPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center my-6">Necklaces Collection</h1>

            
            <BigPicture imgSrc={neck} description="اكثررر رمادية!!--!!"  ></BigPicture>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
                {necklaces.map(necklace => (
                    <NecklaceCard key={necklace.id} necklace={necklace} />
                ))}
            </div>

        </div>
    );
};

export default NecklacesPage;
