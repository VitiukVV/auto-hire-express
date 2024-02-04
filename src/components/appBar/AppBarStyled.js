import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  border-bottom: solid 1px grey;
  box-shadow: 0 0 13px 3px grey;

  > nav {
    display: flex;
    justify-content: space-between;
  }
`;

export const MainLinks = styled.div`
  :first-child {
    margin-right: 28px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 4px;

  &:hover,
  &:focus {
    transition: border-bottom var(--transition);
    border-bottom: 2px solid var(--color-hover);
  }

  &.active {
    color: var(--color-hover);
  }
`;
