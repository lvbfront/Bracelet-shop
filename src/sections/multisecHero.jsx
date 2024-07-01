import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, ekka, neck, ring } from '../components/assets/Data'; // Ensure the path is correctly adjusted to your structure

const MultiHero = () => {
    const [hoveredId, setHoveredId] = useState(null); // State to track which item is hovered

    const items = [
        { id: 1, image: neck, label: 'Necklaces', link: '/NecklacesPage' },
        { id: 2, image: ring, label: 'Rings', link: '/ringsPage' },
        { id: 3, image: Logo, label: 'Watches', link: '/watches' },
        { id: 4, image: ekka, label: 'Bracelets', link: '/bracPage' }
    ];

    return (
        <>
            <div className='flex justify-center my-4'>
                <h1 className='text-gray-700 text-2xl'>منتجاتنا</h1>
            </div>
            
            <div className="grid grid-cols-4 gap-0 p-0 m-0 transition-all duration-500 ease-in-out" 
                 style={{ 
                    gridTemplateColumns: hoveredId ? `${hoveredId === 1 ? '2fr' : '1fr'} ${hoveredId === 2 ? '2fr' : '1fr'} ${hoveredId === 3 ? '2fr' : '1fr'} ${hoveredId === 4 ? '2fr' : '1fr'}` : '1fr 1fr 1fr 1fr'
                 }}>
                {items.map(item => (
                    <div key={item.id} 
                        className="relative group transition-all duration-500 ease-in-out"
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}>
                        <img src={item.image} alt={item.label} 
                            className={`w-full h-96 object-cover transition-transform duration-500 ease-in-out ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}
                        />
                        <Link to={item.link} 
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center font-bold text-white text-xl transition-opacity duration-500 ease-in-out">
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MultiHero;
