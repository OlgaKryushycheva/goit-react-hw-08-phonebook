import { Nav, StyledLink } from 'Styles/StyleForm.styled';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      </Nav>

      <Nav>
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
      </Nav>
    </>
  );
};
