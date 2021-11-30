import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='navbar navbar-expand-lg mb-1'>
      <div className='container-fluid'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            {step1 ? (
              <Link to='/login' className='nav-link active'>
                Sign In
              </Link>
            ) : (
              <Link to='/login' className='nav-link disabled'>
                Sign In
              </Link>
            )}
          </li>
          <li className='nav-item'>
            {step2 ? (
              <Link to='/shipping' className='nav-link active'>
                Shipping
              </Link>
            ) : (
              <Link to='/shipping' className='nav-link disabled'>
                Shipping
              </Link>
            )}
          </li>
          <li className='nav-item'>
            {step3 ? (
              <Link to='/payment' className='nav-link active'>
                Payment
              </Link>
            ) : (
              <Link to='/payment' className='nav-link disabled'>
                Payment
              </Link>
            )}
          </li>
          <li className='nav-item'>
            {step4 ? (
              <Link to='/placeorder' className='nav-link active'>
                Place Order
              </Link>
            ) : (
              <Link to='/placeorder' className='nav-link disabled'>
                Place Order
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSteps;
