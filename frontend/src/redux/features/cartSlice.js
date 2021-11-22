import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartItems: [],
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (argm, { getState }) => {
    const state = getState();
    const { itemId, qty } = argm;
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${itemId}`
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
      return { ...data, qty };
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addToCart.fulfilled, (state = initialState, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    });
  },
});

export function getNumItems(state) {
  let numItems = 0;
  for (let id in state.cart.cartItems) {
    numItems += state.cart.cartItems[id];
  }
  return numItems;
}

// Add to local storage
