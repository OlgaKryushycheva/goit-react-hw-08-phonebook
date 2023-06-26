import { useAuth } from 'hooks/useAuth';

import { Nav, StyledLink } from 'Styles/StyleForm.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      {isLoggedIn && (
        <li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      )}
    </Nav>
  );
};
