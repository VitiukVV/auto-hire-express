import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, MainLinks, StyledLink } from './AppBarStyled';

const AppBar = () => {
  return (
    <>
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
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default AppBar;
