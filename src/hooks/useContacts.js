import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  return {
    contacts: useSelector(selectContacts),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
    filteredContact: useSelector(selectFilteredContacts),
  };
};
