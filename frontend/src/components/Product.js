import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='card my-3 p-3 rounded'>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <div className='card-body'>
        <Link to={`/products/${product.id}`}>
          <h5 className='card-title text-center'>{product.name}</h5>
        </Link>
      </div>
      <div className='card-text text-center'>
        <Rating
          value={product.rating}
          text={` ${product.numReviews} reviews`}
        />
      </div>
      <h4 className='card-text m-2 text-center'>{product.price} €</h4>
    </div>
  );
};

export default Product;
