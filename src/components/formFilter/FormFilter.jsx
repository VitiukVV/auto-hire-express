import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import makes from '../../data/makes.json';
import prices from '../../data/prices.json';
import {
  filterAdvertsByBrand,
  startFetchAdverts,
} from '../../redux/advert/advertOperations';
import Button from '../button/Button';
import { Form, Label, Select } from './FormFilter.styled';

const FormFilter = ({ setPage }) => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('All');
  const [selectPrice, setSelectPrice] = useState('To');

  const handleMakeSelectChange = e => {
    setSelectedMake(e.target.value);
  };

  const handlePriceSelectChange = e => {
    setSelectPrice(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedMake === 'All') {
      dispatch(startFetchAdverts());
      setPage(1);
      return;
    }
    // dispatch(filterAdvertsByPrice('$' + selectPrice));
    dispatch(filterAdvertsByBrand(selectedMake));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Car brand
        <Select
          name="models"
          value={selectedMake}
          onChange={handleMakeSelectChange}
        >
          <option value="All">All</option>
          {makes.map(make => (
            <option key={nanoid()} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          name="Price"
          value={selectPrice}
          onChange={handlePriceSelectChange}
        >
          <option value="$">$</option>
          {prices.map(price => (
            <option key={nanoid()} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </Label>
      <Button type="submit" searchBtn>
        Search
      </Button>
    </Form>
  );
};

export default FormFilter;
