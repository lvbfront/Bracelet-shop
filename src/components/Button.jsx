import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Add 'to' prop to the component's parameters to receive the navigation URL
const Button = ({ label, iconURL, to }) => {
    return (
        // Replace the button with a Link component styled as a button
        <Link to={to} className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
        text-lg leading-none bg-gray-600 rounded-full text-white border-coral-red hover:bg-red-600 transition duration-300">
            {label}
            <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
        </Link>
    );
}

export default Button;
