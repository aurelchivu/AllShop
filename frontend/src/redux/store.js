import { configureStore } from '@reduxjs/toolkit';

import { products } from './features/products';

export const store = configureStore({
  reducer: { [products.reducerPath]: products.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
});
