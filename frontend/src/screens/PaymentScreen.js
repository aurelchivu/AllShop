import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/features/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <div className='row'>
      <div className='col-md-6 xs-12'>
        <CheckoutSteps step1 step2 step3 />
        <h2>Payment Method</h2>
        <form onSubmit={submitHandler}>
          <legend>Select Method</legend>

          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='paymentMethod'
              id='PayPal'
              value='Paypal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label class='form-check-label' for='flexRadioDefault1'>
              Paypal or Credit Card
            </label>
          </div>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='paymentMethod'
              id='Stripe'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label class='form-check-label' for='flexRadioDefault2'>
              Stripe
            </label>
          </div>
          <button
            type='submit'
            className='btn btn-outline-success my-3 rounded-3'
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
