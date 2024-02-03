import styled from 'styled-components';

export const HomeButton = styled.button`
  width: 274px;
  height: 44px;
  background-color: var(--color-accent);
  border-radius: 12px;
  color: var(--color-main);
  padding: 12px 50px;
  border: none;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--color-hover);
  }
`;

export const SearchButton = styled(HomeButton)`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  margin: 0 auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  color: var(--color-accent);
  transition: color var(--transition);

  &:hover,
  &:focus {
    color: var(--color-hover);
  }
`;

export const RentBtn = styled.button`
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--color-accent);
  border: none;
  transition: background-color var(--transition);
  & > a {
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
  }

  &:hover,
  &:focus {
    background-color: var(--color-hover);
  }
`;
