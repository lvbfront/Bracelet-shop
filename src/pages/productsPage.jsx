import React from 'react';
import Navbar from '../components/Navbar';

import ProductCard from '../components/ProductCard';
import NewHero from '../sections/newHero';
import { products } from '../components/assets/Data';
import { neck, Logo } from '../components/assets/Data';

function ProductsPage() {
  // Filter featured and non-featured products
  const featuredProducts = products.filter(product => product.isFeatured);
  const nonFeaturedProducts = products.filter(product => !product.isFeatured);

  
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
    <div className="relative bg-gray-100">

      {/* Hero Section */}
      <section className="xl:px-20 lg:px-10 md:px-5 px-2 pt-10 bg-white">
        <NewHero leftProduct={leftProduct} rightProduct={rightProduct} />
      </section>

      {/* Featured Products Section */}
      <section className="px-2 py-8 mt-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            Featured <span className="text-gray-400">Products</span>
          </h2>
          <p className="lg:max-w-lg mt-2 text-gray-600 mx-auto">
            Explore our exclusive selection of featured products, carefully curated for the best in quality and design.
          </p>
        </div>

        {/* Featured Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products Section */}
      <section className="px-2 py-8 mt-8 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">
            All <span className="text-gray-400">Products</span>
          </h2>
          <p className="lg:max-w-lg mt-2 text-gray-600 mx-auto">
            Browse our full collection of high-quality products. Find something that suits your style and needs.
          </p>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6">
          {nonFeaturedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default ProductsPage;
