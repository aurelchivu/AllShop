import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userLogin: {
    loading: false,
    userInfo: null,
    error: null,
  },
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

export const register = createAsyncThunk(
  'users/register',
  async ({ name, email, password }, { rejectWithValue, dispatch }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/users',
        { name, email, password },
        config
      );

      localStorage.setItem('userInfo', JSON.stringify(data));

      dispatch(login({ email, password }));

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getUserDetails = createAsyncThunk(
  'users/details',
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const { userInfo } = state.users.userLogin;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/users/${id}`,
        config
      );

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'users/update',
  async (user, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const { userInfo } = state.users.userLogin;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:5000/api/users/profile`,
        user,
        config
      );

      return data;
    } catch (error) {
      console.log(error);
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
    // Login reducers
    builder.addCase(login.pending, (state = initialState.userLogin) => {
      state.userLogin.loading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state = initialState.userLogin, action) => {
        state.userLogin.loading = false;
        state.userLogin.userInfo = action.payload;
      }
    );
    builder.addCase(
      login.rejected,
      (state = initialState.userLogin, action) => {
        state.userLogin.loading = false;
        state.userLogin.error = action.payload;
      }
    );
    // Register reducers
    builder.addCase(register.pending, (state = initialState.userRegister) => {
      state.userRegister.loading = true;
    });
    builder.addCase(
      register.fulfilled,
      (state = initialState.userRegister, action) => {
        state.userRegister.loading = false;
        state.userRegister.userInfo = action.payload;
      }
    );
    builder.addCase(
      register.rejected,
      (state = initialState.userRegister, action) => {
        state.userRegister.loading = false;
        state.userRegister.error = action.payload;
      }
    );
    // User details reducers
    builder.addCase(
      getUserDetails.pending,
      (state = initialState.userDetails) => {
        state.userDetails.loading = true;
      }
    );
    builder.addCase(
      getUserDetails.fulfilled,
      (state = initialState.userDetails, action) => {
        state.userDetails.loading = false;
        state.userDetails.user = action.payload;
      }
    );
    builder.addCase(
      getUserDetails.rejected,
      (state = initialState.userDetails, action) => {
        state.userDetails.loading = false;
        state.userDetails.error = action.payload;
      }
    );
    // User update reducers
    builder.addCase(
      updateUserProfile.pending,
      (state = initialState.userUpdateProfile) => {
        state.userUpdateProfile.loading = true;
      }
    );
    builder.addCase(
      updateUserProfile.fulfilled,
      (state = initialState.userUpdateProfile, action) => {
        state.userUpdateProfile.loading = false;
        state.userUpdateProfile.success = true;
        state.userUpdateProfile.user = action.payload;
      }
    );
    builder.addCase(
      updateUserProfile.rejected,
      (state = initialState.userUpdateProfile, action) => {
        state.userUpdateProfile.loading = false;
        state.userUpdateProfile.error = action.payload;
      }
    );
  },
});
