import React from 'react';

/**
 * BigPicture component displays a large image with a description.
 * @param {string} imgSrc - Source URL of the image.
 * @param {string} description - Description to display below the image.
 */
function BigPicture({ imgSrc, description }) {
    return (
        <div className="px-4 py-12 mx-auto max-w-7xl bg-gradient-to-t from-blue-50 to-slate-300 shadow-lg rounded-lg my-8">
            <div className="flex justify-center items-center flex-col">
            <img src={imgSrc} alt={description} className="w-64 h-64 shadow-lg rounded-lg object-cover"/>

                <p className="text-center text-lg text-gray-700 mt-4">{description}</p>
            </div>
        </div>
    );
}

export default BigPicture;
