import axios from 'axios';

axios.defaults.baseURL = 'https://64932984428c3d2035d170c9.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const cresteContact = async ({ name, phone }) => {
  const { data } = await axios.post('/contacts', {
    name,
    phone,
  });
  return data;
};

export const removeContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
