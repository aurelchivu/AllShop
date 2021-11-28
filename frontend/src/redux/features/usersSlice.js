import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userLogin: {
    loading: false,
    userInfo: null,
    error: null,
  },
};

export const login = createAsyncThunk(
  'users/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/users/login',
        { email, password },
        config
      );

      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const logout = () => () => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  document.location.href = '/login';
  return {};
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.pending, (state = initialState) => {
      state.userLogin.loading = true;
    });
    builder.addCase(login.fulfilled, (state = initialState, action) => {
      state.userLogin.loading = false;
      state.userLogin.userInfo = action.payload;
    });
    builder.addCase(login.rejected, (state = initialState, action) => {
      state.userLogin.loading = false;
      state.userLogin.error = action.payload;
    });
  },
});
