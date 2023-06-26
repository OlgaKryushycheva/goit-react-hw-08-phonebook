import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/thunks';

import { Btn, User } from 'Styles/StyleForm.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <User>
      <p>Welcome, {user.name}</p>
      <Btn onClick={handleLogOut}>Logout</Btn>
    </User>
  );
};
