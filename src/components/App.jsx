// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';
// import { Filter } from './Filter';
// import { Container, Title, TitleContact } from 'Styles/StyleForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/thunks';
// import { Loading } from './Loading';
// import { Error } from './Error';

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// import Contacts from 'psges/Contacts';
// import Login from 'psges/Login';
// import Register from 'psges/Register';
// import Home from 'psges/Home';
import Layout from './Layout';

const Contacts = lazy(() => import('psges/Contacts'));
const Login = lazy(() => import('psges/Login'));
const Register = lazy(() => import('psges/Register'));
const Home = lazy(() => import('psges/Home'));

export function App() {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const dipatch = useDispatch();

  // useEffect(() => {
  //   dipatch(fetchContacts());
  // }, [dipatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>

      {/* <Container>
        <Title>Phonebook</Title>

        <ContactForm />

        <Filter />

        <TitleContact>Contacts</TitleContact>

        {isLoading && !error && <Loading />}

        {error && <Error />}

        {contacts && !error && <ContactList />}
      </Container> */}
    </>
  );
}
