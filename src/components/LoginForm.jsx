import { Formik } from 'formik';
import { LoginSchema } from 'validation';

import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';

export const LoginForm = () => {
  const values = {
    name: '',
    email: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
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
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component={'span'} />
        </Label>

        <Label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component={'span'} />
        </Label>

        <Btn type="submit">Login</Btn>
      </Form>
    </Formik>
  );
};
