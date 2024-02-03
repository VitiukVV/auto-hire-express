import React from 'react';
import { CatalogCard } from '../catalogCard/CatalogCard';
import { List } from './CatalogList.styled';

const CatalogList = ({ adverts }) => {
  return (
    <List>
      {adverts.map(carItem => {
        return (
          <CatalogCard key={carItem.id} carDetails={carItem}></CatalogCard>
        );
      })}
    </List>
  );
};

export default CatalogList;
