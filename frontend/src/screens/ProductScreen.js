import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { useGetProductByIdQuery } from '../redux/features/products';

const ProductScreen = () => {

  const params = useParams();
  let navigate = useNavigate();
  const { data: { data } = {}, isFetching } = useGetProductByIdQuery(
    params.id
  );

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  return (
    <>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Link to='/' className='btn btn-outline-success my-3'>
            Go Back
          </Link>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src={data?.image}
                alt={data?.name}
                className='img-fluid'
              ></img>
            </div>

            <div className='col-md-3'>
              <h3>{data?.name}</h3>
              <Rating
                value={data?.rating}
                text={` ${data?.numReviews} reviews`}
              />
              <h4 className='card-text m-2'>{data?.price} €</h4>
            </div>

            <div className='col-md-3'>
              <div className='card-body'>
                <div className='list-group' variant='flush'>
                  <div className='list-group-item'>
                    <div className='row'>
                      <div className='col'>Price:</div>
                      <div className='col'>
                        <strong>{data?.price} €</strong>
                      </div>
                    </div>
                  </div>

                  <div className='list-group-item'>
                    <div className='row'>
                      <div className='col'>Status:</div>
                      <div className='col'>
                        {data?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </div>
                    </div>
                  </div>

                  {data.countInStock > 0 && (
                    <div className='list-group-item'>
                      <div className='row'>
                        <div className='col'>Qty</div>
                        <div className='col'>
                          <select
                            className='form-select'
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(data.countInStock).keys()].map((k) => (
                              <option key={k + 1} value={k + 1}>
                                {k + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className='list-group-item d-grid gap-2'>
                    <button
                      onClick={addToCartHandler}
                      className='btn btn-outline-success my-3'
                      disabled={data?.countInStock === 0}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className='m-3 p-3'>Description</h3>
              <h5 className='m-3 p-3'>{data?.description}</h5>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductScreen;
