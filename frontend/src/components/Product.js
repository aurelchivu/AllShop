import React from 'react';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='card my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <img src={product.image} className='card-img-top' alt='product' />
      </a>
      <div className='card-body'>
        <a href={`/product/${product._id}`}>
          <h5 className='card-title text-center'>{product.name}</h5>
        </a>
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
