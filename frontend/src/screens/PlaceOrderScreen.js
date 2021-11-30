import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../redux/features/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const placeOrderHandler = () => {
    console.log('Order placed!');
    // dispatch(
    //   createOrder({
    //     orderItems: cart.cartItems,
    //     shippingAddress: cart.shippingAddress,
    //     paymentMethod: cart.paymentMethod,
    //     itemsPrice
    //     shippingPrice
    //     taxPrice
    //     totalPrice
    //   })
    // );
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className='row'>
        <div className='col-md-7'>
          <ul className='list-group list-group-flush'>
            <li key={'address'} className='list-group-item'>
              <h3>Shipping</h3>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </li>

            <li key={'payment_method'} className='list-group-item'>
              <h3>Payment Method</h3>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </li>

            <li key={'order_items'} className='list-group-item'>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>
                  Your cart is empty <Link to='/'>Go To Main Page</Link>
                </Message>
              ) : (
                <ul className='list-group list-group-flush'>
                  {cartItems.map((item, index) => (
                    <li key={index} className='list-group-item'>
                      <div className='row'>
                        <div className='col-md-1'>
                          <img
                            src={item.image}
                            className='img-fluid rounded float-start'
                            alt={item.name}
                          />
                        </div>
                        <div className='col my-auto'>
                          <Link to={`/products/${item.id}`}>{item.name}</Link>
                        </div>
                        <div className='col-md-4 my-auto'>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className='col-md-1'></div>
        <div className='col-md-4 my-auto'>
          <div className='card'>
            <ul className='list-group list-group-flush '>
              <li
                key={'Order Summary'}
                className='list-group-item d-flex justify-content-around align-items-center'
              >
                <h2>Order Summary</h2>
              </li>

              <li key={'Items'} className='list-group-item'>
                <div className='row'>
                  <div className='col'>Items</div>
                  <div className='col'>${itemsPrice}</div>
                </div>
              </li>

              <li key={'Shipping'} className='list-group-item'>
                <div className='row'>
                  <div className='col'>Shipping</div>
                  <div className='col'>${shippingPrice}</div>
                </div>
              </li>
              <li key={'Tax'} className='list-group-item'>
                <div className='row'>
                  <div className='col'>Tax</div>
                  <div className='col'>${taxPrice}</div>
                </div>
              </li>

              <li key={'Total'} className='list-group-item'>
                <div className='row'>
                  <div className='col'>Total</div>
                  <div className='col'>${totalPrice}</div>
                </div>
              </li>

              <li key={'button'} className='list-group-item'>
                <div className='d-flex justify-content-around align-items-center'>
                  <button
                    type='button'
                    className='btn btn-primary rounded-3'
                    disabled={cartItems.length === 0}
                    onClick={placeOrderHandler}
                  >
                    Place Order
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
