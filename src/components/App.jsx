import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container, Title, TitleContact } from 'Styles/StyleForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/thunks';
import { Loading } from './Loading';
import { Error } from './Error';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchContacts());
  }, [dipatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <Filter />

      <TitleContact>Contacts</TitleContact>

      {isLoading && !error && <Loading />}

      {error && <Error />}

      {contacts && !error && <ContactList />}
    </Container>
  );
}
