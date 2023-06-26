import { Formik } from 'formik';
import { SignupSchema } from 'validation';

import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';

export const RegisterForm = () => {
  const values = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component={'span'} />
        </Label>

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

        <Btn type="submit">Sign up</Btn>
      </Form>
    </Formik>
  );
};
