import React from 'react';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { useGetAllProductsQuery } from '../redux/features/productsSlice';

const HomeScreen = () => {
  const { data = [], isFetching } = useGetAllProductsQuery();

  return (
    <>
      <h2>Latest Products</h2>
      <div className='row'>
        {isFetching ? (
          <Loader />
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
