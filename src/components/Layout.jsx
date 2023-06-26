import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from 'Styles/StyleForm.styled';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <UserMenu />
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
