import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';
import { selectFilteredContacts } from 'redux/selectors';
import { List } from 'Styles/StyleForm.styled';

export const ContactList = () => {
  const filterContact2 = useSelector(selectFilteredContacts);

  return (
    <List>
      {filterContact2.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
