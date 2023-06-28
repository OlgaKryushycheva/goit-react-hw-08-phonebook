import { createSlice } from '@reduxjs/toolkit';
import {
  fetchSuccses,
  addSuccses,
  deleteleSuccses,
  handlePending,
  handleRejected,
} from './hendlers';
import { initialState } from './initialState';
import { deleteContact, fetchContacts, addContact } from './thunks';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchSuccses)
      .addCase(addContact.fulfilled, addSuccses)
      .addCase(deleteContact.fulfilled, deleteleSuccses)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
    // ВОТ ГДЕ БЫЛА ОШИБКА
    // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReduser = contactsSlice.reducer;
