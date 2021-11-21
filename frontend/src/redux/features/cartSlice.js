import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
// import { store } from '../store';
import axios from 'axios';

const initialState = {
  cartItems: [],
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (id, { getState }) => {
    try {
      const state = getState();
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
      return data;
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

      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
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
