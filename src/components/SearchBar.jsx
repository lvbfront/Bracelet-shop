import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
    );
}

export default SearchBar;
