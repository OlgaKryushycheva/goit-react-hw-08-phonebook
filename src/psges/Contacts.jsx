import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Error } from 'components/Error';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { useContacts } from 'hooks/useContacts';
import { fetchContacts } from 'redux/contacts/thunks';

import { Title, TitleContact } from 'Styles/StyleForm.styled';

const Contacts = () => {
  const { contacts, isLoading, error } = useContacts();

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
