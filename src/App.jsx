
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import React, { useState } from 'react';
import { Route, Routes,  } from 'react-router-dom';
import ProductsPage from './pages/productsPage';
import ProductDetailPage from './components/ProductDetailPage';


export default function App() {
  

  return (

    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
    
  )
}
