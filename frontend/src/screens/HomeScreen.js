import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data.data);
      setSuccess(data.success);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Latest Products</h2>
      <div className='row'>
        {success ? (
          products.map((product) => (
            <div
              key={product.id}
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
            >
              <Product product={product} />
            </div>
          ))
        ) : (
          <h5>Loading...</h5>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
