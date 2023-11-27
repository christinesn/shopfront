import React from 'react';
import './App.css';
import Header from "./Header";
import ProductsHeading from './ProductsHeading';
import Product from './Product';
import productDetails from './productDetails';
import CartProvider from './CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <ProductsHeading />
        <div className="products">
          {productDetails.map(item => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
