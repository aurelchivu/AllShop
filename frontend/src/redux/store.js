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

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  users: { userLogin: { userInfo: userInfoFromStorage } },
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
