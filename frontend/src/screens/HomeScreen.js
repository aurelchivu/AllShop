import React from 'react';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <div className='row'>
        {products.map((product) => (
          <div className='col-lg-3 d-flex align-items-stretch'>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
