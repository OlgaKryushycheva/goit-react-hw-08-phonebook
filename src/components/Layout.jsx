import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { Auth } from './Auth';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { Loading } from './Loading';

import { Container, Header } from 'Styles/StyleForm.styled';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Auth />}
      </Header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
