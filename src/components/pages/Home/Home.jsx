import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../button/Button';
import {
  Container,
  Description,
  HomePageSection,
  ServiceItem,
  ServicesList,
  Title,
} from './HomeStyled';

const Home = () => {
  const navigate = useNavigate();
  const handleCatalogButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <HomePageSection>
      <Container>
        <Title>Auto Hire Express</Title>
        <Description>
          Welcome to our company, where we provide car rental services for all
          your travel and everyday needs.
        </Description>
        <Button type="button" handlerClick={handleCatalogButtonClick}>
          Go to Catalog
        </Button>
        <ServicesList>
          <ServiceItem>
            Wide selection of modern and reliable vehicles
          </ServiceItem>
          <ServiceItem>Flexible rates and convenient rental terms</ServiceItem>
          <ServiceItem>24/7 customer support and service</ServiceItem>
          <ServiceItem>Safety and reliability of our vehicle fleet</ServiceItem>
        </ServicesList>
      </Container>
    </HomePageSection>
  );
};

export default Home;
