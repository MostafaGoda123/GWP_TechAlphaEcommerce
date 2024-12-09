import React from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Navbar />
        {/* <Home /> */}
        {/* <Products /> */}
        {/* <Cart /> */}
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/products`} element={<Products />} />
        <Route path={`/cart`} element={<Cart />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
