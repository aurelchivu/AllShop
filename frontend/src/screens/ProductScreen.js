import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/v1/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link to='/' className='btn btn-outline-success my-3'>
        Go Back
      </Link>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={product.image}
            alt={product.name}
            className='img-fluid'
          ></img>
        </div>

        <div className='col-md-3'>
          <h3>{product.name}</h3>
          <Rating
            value={product.rating}
            text={` ${product.numReviews} reviews`}
          />
          <h4 className='card-text m-2'>{product.price} €</h4>
        </div>

        <div className='col-md-3'>
          <div className='card-body'>
            <div className='list-group' variant='flush'>
              <div className='list-group-item'>
                <div className='row'>
                  <div className='col'>Price:</div>
                  <div className='col'>
                    <strong>{product.price} €</strong>
                  </div>
                </div>
              </div>

              <div className='list-group-item'>
                <div className='row'>
                  <div className='col'>Status:</div>
                  <div className='col'>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
              </div>

              <div className='list-group-item d-grid gap-2'>
                <button
                  className='btn btn-outline-success my-3'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='m-3 p-3'>Description</h3>
          <h5 className='m-3 p-3'>{product.description}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
