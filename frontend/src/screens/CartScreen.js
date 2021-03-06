import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/features/cartSlice';
import Message from '../components/Message';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/shipping';

  const checkoutHandler = () => {
    navigate(redirect ? `/login?redirect=${redirect}` : '/shipping');
  };

  return (
    <div className='row'>
      <div className='col-md-7'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go To Main Page</Link>
          </Message>
        ) : (
          <ul className='list-group list-group-flush'>
            {cartItems.map((item, index) => (
              <li key={index} className='list-group-item'>
                <div className='row'>
                  <div className='col-md-2'>
                    <img
                      src={item.image}
                      className='img-fluid'
                      alt={item.name}
                    />
                  </div>
                  <div className='col-md-3'>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                  </div>
                  <div className='col-md-2'>${item.price}</div>
                  <div className='col-md-2'>
                    <select
                      className='form-select'
                      as='select'
                      value={item.qty}
                      onChange={(e) => {
                        const itemId = item.id;
                        const qty = Number(e.target.value);
                        dispatch(addToCart({ itemId, qty }));
                      }}
                    >
                      {[...Array(item?.countInStock).keys()].map((k) => (
                        <option key={k + 1} value={k + 1}>
                          {k + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-md-2'>
                    <button
                      onClick={() => {
                        const itemId = item.id;
                        dispatch(removeFromCart({ itemId }));
                      }}
                      className='btn'
                    >
                      <i className='fas fa-trash-alt'></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='col-md-1'></div>
      <div className='col-md-4'>
        <div className='card'>
          <ul className='list-group list-group-flush'>
            <li key={'subtotal'} className='list-group-item'>
              <h2>
                Subtotal (
                {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </li>
            <li key={'checkout'} className='list-group-item'>
              <div className='d-flex justify-content-around align-items-center my-3'>
                <button
                  type='button'
                  className='btn btn-primary rounded-3'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
