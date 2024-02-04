import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoriteAdverts } from '../../../redux/favorite/favorite-selectors';
import Button from '../../button/Button';
import CatalogList from '../../catalogList/CatalogList';
import {
  Description,
  FavoritePageContainer,
  PageTitle,
} from './FavoriteCar.styled';

const FavoriteCar = () => {
  const navigate = useNavigate();
  const handleCatalogButtonClick = () => {
    navigate('/catalog');
  };

  const favoriteCars = useSelector(selectFavoriteAdverts);

  return favoriteCars.length > 0 ? (
    <CatalogList adverts={favoriteCars} />
  ) : (
    <FavoritePageContainer>
      <PageTitle>Your Favorite Cars</PageTitle>
      <Description>
        It looks like your favorite cars list is currently empty. Discover and
        add cars that catch your eye to personalize your collection.
      </Description>
      <Button type="button" handlerClick={handleCatalogButtonClick}>
        Go to Catalog
      </Button>
    </FavoritePageContainer>
  );
};

export default FavoriteCar;
