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
        <section className="products">
          <ProductsHeading />
          {products.map(item => (
            <Product product={item} key={item.id} />
          ))}
        </section>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
