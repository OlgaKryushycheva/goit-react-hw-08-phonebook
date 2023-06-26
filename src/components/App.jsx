import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import { refreshUser } from 'redux/auth/thunks';
import { RestrictedRoads } from './RestrictedRoad';
import { PrivateRoads } from './PrivateRoads';
import { useAuth } from 'hooks/useAuth';

const Contacts = lazy(() => import('psges/Contacts'));
const Login = lazy(() => import('psges/Login'));
const Register = lazy(() => import('psges/Register'));
const Home = lazy(() => import('psges/Home'));

export function App() {
  const dipatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dipatch(refreshUser());
  }, [dipatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoads component={Contacts} redirectTo="/register" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoads component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoads component={Login} redirectTo="/contacts" />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    )
  );
}
