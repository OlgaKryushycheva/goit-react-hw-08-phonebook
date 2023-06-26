import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/thunks';
import { LoginSchema } from 'validation';

import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';

export const LoginForm = () => {
  const disppatch = useDispatch();

  const values = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    disppatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component={'span'} />
        </Label>

        <Label>
          Pasword
          <Field name="password" type="password" />
          <ErrorMessage name="password" component={'span'} />
        </Label>

        <Btn type="submit">Log in</Btn>
      </Form>
    </Formik>
  );
};
