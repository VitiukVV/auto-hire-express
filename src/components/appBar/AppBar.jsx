import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Main, MainLinks, StyledLink } from './AppBarStyled';

const AppBar = () => {
  return (
    <Container>
      <Header>
        <nav>
          <div>
            <StyledLink to="/">AutoHireExpress.com</StyledLink>
          </div>
          <MainLinks>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </MainLinks>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default AppBar;
