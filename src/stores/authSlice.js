import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
  users: [],
  isAuthenticated: false
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue  }) => {
    try {
      const { users } = getState().auth;
      const user = users.find(u => u.email === credentials.email);
      
      if (!user) {
        return rejectWithValue('User not found');
      }
      
      if (user.password !== credentials.password) {
        return rejectWithValue('Wrong password');
      }

      const response = await axios.post('https://reqres.in/api/login', {
        email: credentials.email,
        password: credentials.password
      });

      return { ...user, token: response.data.token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userInfo, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const emailExists = auth.users.some(user => user.email === userInfo.email);
      
      if (emailExists) {
        return rejectWithValue('The email is already registered');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInfo.email)) {
        return rejectWithValue('Invalid email');
      }

      if (userInfo.password.length < 6) {
        return rejectWithValue('Password must be at least 6 characters long');
      }

      const response = await axios.post('https://reqres.in/api/register', userInfo);
      
      const newUser = {
        ...userInfo,
        id: response.data.id,
        token: response.data.token
      };

      return newUser;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.users.push(action.payload);
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, addUser, clearError } = authSlice.actions;
export default authSlice.reducer;