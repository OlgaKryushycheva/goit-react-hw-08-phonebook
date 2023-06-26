import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;

// === мемоизированный селектор. Не вижу разницы с составным ===

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    // console.log('memoSelect');

    const filterContact = contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase().trim())
    );

    return filterContact;
  }
);

// ==== составной селектор. Не вижу разныцы с мемоизированным ===

// export const selectFilteredContacts = state => {
//   console.log('select');

//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   const filterContact = contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
//   );

//   return filterContact;
// };
