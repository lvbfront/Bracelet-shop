import React from 'react';
import NewHero from '../sections/newHero';
import { neck, Logo } from '../components/assets/Data';
import ProductCard from '../components/ProductCard';
function NewPage() {

    const leftProduct = {
        imgSrc: neck,
        subtitle: "Elegant Gold Bracelet",
        link: "/products/10"
    };

    const rightProduct = {
        imgSrc: Logo,
        subtitle: "Stylish Silver Bracelet",
        link: "/products/11"
    };

    return (

        <div className=" min-h-screen">
            <NewHero leftProduct={leftProduct} rightProduct={rightProduct} />

            
        </div>
    );
}

export default NewPage;
