import React from 'react';
import NecklaceCard from '../components/necklaceCard'; // Ensure the component file name matches the import
import { necklaces } from '../components/assets/Data'; // Adjust the path as necessary

const NecklacesPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center my-6">Necklaces Collection</h1>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
                {necklaces.map(necklace => (
                    <NecklaceCard key={necklace.id} necklace={necklace} />
                ))}
            </div>
        </div>
    );
};

export default NecklacesPage;
