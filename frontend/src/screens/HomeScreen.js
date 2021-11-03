import React from 'react';
import Product from '../components/Product';
import { useGetAllProductsQuery } from '../redux/features/products';

const HomeScreen = () => {
  const { data: { data } = [], isFetching } = useGetAllProductsQuery();

  return (
    <>
      <h2>Latest Products</h2>
      <div className='row'>
        {isFetching ? (
          <h2>Loading...</h2>
        ) : (
          data?.map((product) => (
            <div
              key={product.id}
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
            >
              <Product product={product} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HomeScreen;
