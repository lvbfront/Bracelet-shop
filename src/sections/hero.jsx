import React from 'react';
import Button from '../components/Button';
import {arrowRight} from '../components/assets/icons'
import {ekka} from '../components/assets/Data'

import { shoes} from "../components/assets/Data";


const Hero = () => {
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
       <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections comooonnn
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
            <Button label="show me" iconURL={arrowRight}/>
            
            
        </div>


        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={ekka}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        
      </div>


    </section>
  )
}

export default Hero