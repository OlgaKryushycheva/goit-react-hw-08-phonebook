import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/thunks';
import { ContactSchema } from 'validation';
import { useContacts } from 'hooks/useContacts';

import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const { contacts } = useContacts();

  const values = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const isExist = contacts.find(contact => contact.name === values.name);

    if (isExist) {
      alert(`${values.name} ia already in contacts`);
    } else {
      dispatch(addContact(values));
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component={'span'} />
        </Label>

        <Label>
          Number
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component={'span'} />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};
