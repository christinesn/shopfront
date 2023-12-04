import React from 'react';
import './App.css';
import Header from "./Header";
import ProductsHeading from './ProductsHeading';
import Product from './Product';
import products from './products';
import CartProvider from './CartProvider';
import Footer from './Footer';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <ProductsHeading />
        <div className="products">
          {products.map(item => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
