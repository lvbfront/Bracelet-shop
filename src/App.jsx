
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import React, { useState } from 'react';
import { Route, Routes,  } from 'react-router-dom';
import ProductsPage from './pages/productsPage';
import ScrollToTop from './components/ScrollToTop';
import ProductDetailPage from './components/ProductDetailPage';
import NewPage from './pages/newPage';


export default function App() {
  

  return (

    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
    
  )
}
