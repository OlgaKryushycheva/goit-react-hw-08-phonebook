import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

export const PrivateRoads = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirectTo = !isLoggedIn && !isRefreshing;

  return shouldRedirectTo ? <Navigate to={redirectTo} /> : <Component />;
};
