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
        <div className="products">
          {[...Array(10).keys()].map((v, index) => (
            <Product key={index} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
