import axios from 'axios';

// const axiosContacts = axios.create({
//   baseURL: 'https://64932984428c3d2035d170c9.mockapi.io/',
// });

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  // const { data } = await axiosContacts.get('/contacts');
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

// ==== екземпляр axios (якщо в 1 проекті різні бекенди) ===================

// const axiosContacts = axios.create({
//   baseURL: 'https://64932984428c3d2035d170c9.mockapi.io/',
// });

// export const getContacts = async () => {
//   const { data } = await axiosContacts.get('/contacts');
//   return data;
// };
