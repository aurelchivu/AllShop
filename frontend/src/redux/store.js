import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './features/productsSlice';
import { cartSlice } from './features/cartSlice';
import { usersSlice } from './features/usersSlice';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : '';

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  users: {
    userLogin: { userInfo: userInfoFromStorage },
    userRegister: {
      loading: false,
      userInfo: null,
      error: null,
    },
    userDetails: {
      loading: false,
      user: null,
      error: null,
    },
    userUpdateProfile: {
      loading: false,
      success: false,
      user: null,
      error: null,
    },
  },
};

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
  preloadedState,
});
