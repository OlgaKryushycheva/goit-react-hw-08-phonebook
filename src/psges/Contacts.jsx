import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Error } from 'components/Error';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/thunks';
import { Title, TitleContact } from 'Styles/StyleForm.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchContacts());
  }, [dipatch]);

  return (
    <>
      <Title>Phonebook</Title>

      <ContactForm />

      <Filter />

      <TitleContact>Contacts</TitleContact>

      {isLoading && !error && <Loading />}

      {error && <Error />}

      {contacts && !error && <ContactList />}
    </>
  );
};

export default Contacts;
