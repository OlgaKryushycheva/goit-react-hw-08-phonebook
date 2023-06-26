import { createSlice } from '@reduxjs/toolkit';

import {
  logInSuccses,
  logOutSuccses,
  refreshPending,
  refreshRejected,
  refreshUserSuccses,
  registerSuccses,
} from './hendlers';
import { initialState } from './initialState';
import { logIn, logOut, refreshUser, register } from './thunks';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerSuccses)
      .addCase(logIn.fulfilled, logInSuccses)
      .addCase(logOut.fulfilled, logOutSuccses)
      .addCase(refreshUser.fulfilled, refreshUserSuccses)
      .addCase(refreshUser.pending, refreshPending)
      .addCase(refreshUser.rejected, refreshRejected),
});

export const authReduser = authSlice.reducer;
