import React from 'react';
import RingsCard from '../components/ringsCard';// Adjust the import path as needed
import { ringsData } from '../components/assets/Data';// Your path and data structure might differ

const RingsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Our Rings Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {ringsData.map(ring => (
                    <RingsCard key={ring.id} ring={ring} />
                ))}
            </div>
        </div>
    );
};

export default RingsPage;
