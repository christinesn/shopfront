import React from 'react';
import './App.css';
import Header from "./Header";
import ProductsHeading from './ProductsHeading';
import Product from './Product';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <ProductsHeading />
        <Product />
      </main>
    </React.Fragment>
  );
}

export default App;
