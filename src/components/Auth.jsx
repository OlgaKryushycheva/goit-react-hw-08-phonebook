import { Nav, StyledLink } from 'Styles/StyleForm.styled';

export const Auth = () => {
  return (
    <Nav>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Log in</StyledLink>
      </li>
    </Nav>
  );
};
