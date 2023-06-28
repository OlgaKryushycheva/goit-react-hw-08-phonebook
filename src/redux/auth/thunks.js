import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (token === null) {
      return thunkAPI.rejectWithValue('refreshUser with error');
      // эта ошибка почему-то записывается в CONTACTS.state.error
      // консоль выдает ошибки и ничего не рендерится при первой загрузке страницы,
      // или если разлогиниться и перезагрузить старницу.
      // Приложение будет работать только если
      // поставить contacts.state.error = null при Pending (handlePending)
      // (при Фулфилд недостаточно!) экшенов из contacts
      // но такого же не должно быть вообще?
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // вчера работало нормально, но сегодня (я ничего не меняла)
      // приложение работает, но при разлогиненом юзере
      // и обновлении страницы консоль показывает ошибку
      // и в contacts.state.error у же записывается этот error.message
    }
  }
);
