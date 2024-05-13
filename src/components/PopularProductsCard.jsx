import React from 'react'
import { star } from '../components/assets/icons';
import { Link } from 'react-router-dom';
const PopularProductsCard = ({ imgURL, name, price }) => {
    return (
      
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
          <img src={imgURL} alt={name} className='w-[200px] h-[200px]' /> {/* Reduced image size */}
          <div className='mt-4 flex justify-start gap-2.5'> {/* Reduced gap */}
            <img src={star} alt='rating icon' width={18} height={18} /> {/* Reduced icon size */}
            <p className='font-montserrat text-base leading-normal text-slate-gray'> {/* Reduced font size */}
              (4.5)
            </p>
          </div>
          <h3 className='mt-2 text-lg leading-normal font-semibold font-palanquin'> {/* Reduced font size */}
            {name}
          </h3>
          <p className='mt-1 font-semibold font-montserrat text-coral-red text-lg leading-normal'> {/* Reduced font size */}
            {price}
          </p>
          
        </div>
      );
}

export default PopularProductsCard;