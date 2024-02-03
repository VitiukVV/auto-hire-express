import React from 'react';
import { getSplitArr } from '../../helpers/getSplitArr';
import { reverseString } from '../../helpers/reversingString';
import sprite from '../../icons/symbol-defs.svg';
import Button from '../button/Button';
import {
  CloseBtn,
  CloseSvg,
  ConditionsText,
  ConditionsTextWrapper,
  Description,
  ImgModal,
  ImgWrapperModal,
  InfoTextWrapper,
  MainContentWrapper,
  MainTextWrapper,
  ModalTextWrapper,
  Paragraph,
} from './FullCard.styled';

const FullCard = ({ onClose, details }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = details;

  const adressArr = getSplitArr(address, ',');
  const rentalCondition = getSplitArr(rentalConditions, '\n');
  const [minAge, age] = getSplitArr(rentalCondition[0], ':');

  return (
    <MainContentWrapper>
      <CloseBtn type="button" onClick={onClose}>
        <CloseSvg>
          <use href={`${sprite}#icon-close`}></use>
        </CloseSvg>
      </CloseBtn>
      <ImgWrapperModal>
        <ImgModal src={img} alt={make} loading="lazy" />
      </ImgWrapperModal>

      <ModalTextWrapper>
        <MainTextWrapper>
          <h4>
            {make}
            <span> {model}</span>, {year}
          </h4>
        </MainTextWrapper>
        <InfoTextWrapper>
          <p>{adressArr[1]}</p>
          <p>{adressArr[2]}</p>
          <p>Id: {id}</p>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <p>Fuel Consumption: {fuelConsumption}</p>
          <p>Engine Size: {engineSize}</p>
        </InfoTextWrapper>
        <Description>{description}</Description>
      </ModalTextWrapper>
      <ModalTextWrapper>
        <Paragraph>Accessories and functionalities:</Paragraph>
        <InfoTextWrapper>
          <p>{accessories[0]}</p>
          <p>{accessories[1]}</p>
          <p>{accessories[2]}</p>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <p>{functionalities[0]}</p>
          <p>{functionalities[1]}</p>
          <p>{functionalities[2]}</p>
        </InfoTextWrapper>
      </ModalTextWrapper>
      <ModalTextWrapper>
        <Paragraph>Rental Conditions:</Paragraph>
        <ConditionsTextWrapper>
          <ConditionsText>
            {minAge}: <span>{age}</span>
          </ConditionsText>
          <ConditionsText>{rentalCondition[1]}</ConditionsText>
        </ConditionsTextWrapper>
        <ConditionsTextWrapper>
          <ConditionsText>{rentalCondition[2]}</ConditionsText>
          <ConditionsText>
            Mileage: <span>{mileage.toLocaleString('en-US')}</span>
          </ConditionsText>
          <ConditionsText>
            Price: <span>{reverseString(rentalPrice)}</span>
          </ConditionsText>
        </ConditionsTextWrapper>
      </ModalTextWrapper>
      <Button rent>
        <a href="tel:+380730000000">Rental car</a>
      </Button>
    </MainContentWrapper>
  );
};

export default FullCard;
