import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/product'; // Ensure the file name matches exactly, including case sensitivity
import Footer from '../components/footer';


// Assuming productInfo contains the correct structure for your Product component
const productInfo = [
  {
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*omXNDFPKOGqy1Qaj.png',
    title: 'Jenny’s Closets - The winter top for female, green',
    price: '49',
    originalPrice: '99',
    description: 'Save 50% right now',
    features: ['Made with full cotton', 'Slim fit for any body', 'Quality control by JC']
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/3c/fa/2f/3cfa2fcb49aab9960f160c51d70bc68a.jpg',
    title: 'Product 2',
    price: '29',
    originalPrice: '59',
    description: 'Limited time offer',
    features: ['Eco-friendly material', 'Water-resistant', 'Two-year warranty']
  }
];

function Home() {
  const [showProduct, setShowProduct] = useState(false);

  // Corrected by adding the return statement
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Product List</h1>
      <div className="flex flex-wrap justify-center -mx-2 mt-2 bg-slate-500">
        {productInfo.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 p-3">
            <Product product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
