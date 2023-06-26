import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const createContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', {
    name,
    number,
  });
  return data;
};

export const removeContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
