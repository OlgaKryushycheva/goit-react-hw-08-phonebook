import { ContactItem } from './ContactItem';
import { useContacts } from 'hooks/useContacts';

import { List } from 'Styles/StyleForm.styled';

export const ContactList = () => {
  const { filteredContact } = useContacts();

  return (
    <List>
      {filteredContact.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
