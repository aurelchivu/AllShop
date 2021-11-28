import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './features/productsSlice';
import { cartSlice } from './features/cartSlice';
import { usersSlice } from './features/usersSlice';

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});
