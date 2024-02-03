import React from 'react';
import {
  SearchButton,
  HomeButton,
  LoadMoreButton,
  RentBtn,
} from './Botton.styled';

const Button = ({ handlerClick, children, searchBtn, loadMore, rent }) => {
  if (searchBtn) {
    return <SearchButton>{children}</SearchButton>;
  }
  if (loadMore) {
    return <LoadMoreButton onClick={handlerClick}>{children}</LoadMoreButton>;
  }
  if (rent) {
    return <RentBtn>{children}</RentBtn>;
  }
  return <HomeButton onClick={handlerClick}>{children}</HomeButton>;
};

export default Button;
