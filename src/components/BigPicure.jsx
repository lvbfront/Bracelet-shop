import React from 'react';

/**
 * BigPicture component displays a large image with a description.
 * @param {string} imgSrc - Source URL of the image.
 * @param {string} description - Description to display below the image.
 */
function BigPicture({ imgSrc, description }) {
    return (
        <div className="container mx-auto px-4 my-8">
            <div className="flex justify-center items-center flex-col">
                <img src={imgSrc} alt={description} className="max-w-full h-auto shadow-lg rounded-lg"/>
                <p className="text-center text-lg text-gray-700 mt-4">{description}</p>
            </div>
        </div>
    );
}

export default BigPicture;
