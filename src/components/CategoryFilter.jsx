import React from 'react';

const CategoryFilter = ({ category, onCategoryChange }) => {
    const categories = ['All', 'Other', 'Silver', 'Gold', 'Black'];

    return (
        <div className="flex justify-center space-x-3 mb-4">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`py-2 px-4 text-sm font-semibold rounded-lg ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
