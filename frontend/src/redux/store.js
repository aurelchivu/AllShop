import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './features/productsSlice';
import { cartSlice } from './features/cartSlice';

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});
