import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';
import { addContact } from 'redux/contacts/thunks';
import { ContactSchema } from 'validation';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const values = {
    name: '',
    phone: '',
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
          <Field name="phone" type="tel" />
          <ErrorMessage name="phone" component={'span'} />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};
