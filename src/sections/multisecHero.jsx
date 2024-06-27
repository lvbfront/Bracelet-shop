import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, ekka, neck, ring } from '../components/assets/Data'; // Ensure the path is correctly adjusted to your structure

const MultiHero = () => {
    const [hoveredId, setHoveredId] = useState(null); // State to track which item is hovered

    const items = [
        { id: 1, image: neck, label: 'Necklaces', link: '/NecklacesPage' },
        { id: 2, image: ring, label: 'Rings', link: '/rings' },
        { id: 3, image: Logo, label: 'Watches', link: '/watches' },
        { id: 4, image: ekka, label: 'Bracelets', link: '/bracelets' }
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-0 m-0">
            {items.map(item => (
                <div key={item.id} 
                     className="relative group"
                     onMouseEnter={() => setHoveredId(item.id)}
                     onMouseLeave={() => setHoveredId(null)}>
                    <img src={item.image} alt={item.label} 
                         className={`w-full h-48 sm:h-72 md:h-96 object-cover transition-transform duration-300 
                         ${hoveredId === item.id ? 'scale-110' : 'scale-90'}`}
                    />
                    <Link to={item.link} 
                          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-opacity-50 flex items-center justify-center font-bold text-white text-xl transition-opacity duration-300">
                        {item.label}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MultiHero;
