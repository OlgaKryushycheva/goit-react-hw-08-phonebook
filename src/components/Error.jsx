import { useContacts } from 'hooks/useContacts';

import { Err } from 'Styles/StyleForm.styled';

export const Error = () => {
  const error = useContacts();
  return <Err>{error}</Err>;
};
