import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: '',
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ itemId, qty }, { getState }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${itemId}`
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
      return { ...data, qty };
    } catch (error) {
      return error;
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ itemId }, { getState }) => {
    try {
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
      return itemId;
    } catch (error) {
      return error;
    }
  }
);

export const saveShippingAddress = createAsyncThunk(
  'cart/saveShippingAddress',
  async (data) => {
    localStorage.setItem('shippingAddress', JSON.stringify(data));
    return data;
  }
);

export const savePaymentMethod = createAsyncThunk(
  'cart/savePaymentMethod',
  async (data) => {
    localStorage.setItem('paymentMethod', JSON.stringify(data));
    return data;
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
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    });
    builder.addCase(saveShippingAddress.fulfilled, (state, action) => {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    });
    builder.addCase(savePaymentMethod.fulfilled, (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    });
  },
});

// Add to local storage delay
