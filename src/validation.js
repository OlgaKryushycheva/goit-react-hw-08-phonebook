import * as Yup from 'yup';

// схему валидации должен давать бэкэнд?
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too short - should be 5 chars minimum')
    .max(20, 'Too lond! - should be 20 chars maximum')
    .required('No name provided'),
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

// схему валидации должен давать бэкэнд?
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too short - should be 5 chars minimum')
    .max(20, 'Too lond - should be 20 chars maximum')
    .required('No name provided'),
  number: Yup.string()
    .matches(/[+3][0-9]{12}$/, 'Phone should be +380000000000')
    .required('No name provided'),
});

// можно ли сделать 1 валюдацию на все? пока так не работает
// (не сабмитится - наверное потому что не все параметры)
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too short - should be 5 chars minimum')
    .max(20, 'Too lond! - should be 20 chars maximum')
    .required('No name provided'),
  number: Yup.string()
    .matches(/[+3][0-9]{12}$/, 'Заполните поле в формате +380000000000')
    .required('No name provided'),
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
