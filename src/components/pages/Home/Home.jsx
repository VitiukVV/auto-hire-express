import React from 'react';
import {
  Button,
  Description,
  HomePageContainer,
  ServiceItem,
  ServicesList,
  Title,
} from './HomeStyled';
import { useNavigate } from 'react-router-dom';
// домашня сторінка з загальним описом послуг, що надає компанія. Стилізація та оформлення на ваш розсуд
const Home = () => {
  const navigate = useNavigate();
  const handleCatalogButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <HomePageContainer>
      <Title>Auto Hire Express</Title>
      <Description>
        Welcome to our company, where we provide car rental services for all
        your travel and everyday needs.
      </Description>
      <Button onClick={handleCatalogButtonClick}>Go to Catalog</Button>
      <ServicesList>
        <ServiceItem>
          Wide selection of modern and reliable vehicles
        </ServiceItem>
        <ServiceItem>Flexible rates and convenient rental terms</ServiceItem>
        <ServiceItem>24/7 customer support and service</ServiceItem>
        <ServiceItem>Safety and reliability of our vehicle fleet</ServiceItem>
      </ServicesList>
    </HomePageContainer>
  );
};

export default Home;
