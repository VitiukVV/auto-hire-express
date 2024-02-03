import React, { useState } from 'react';
import { getSplitArr } from '../../helpers/getSplitArr';
import { truncateString } from '../../helpers/truncateString';
import sprite from '../../icons/symbol-defs.svg';
import Button from '../button/Button';
import FullCard from '../fullCard/FullCard';
import Modal from '../modal/Modal';
import {
  ButtonFavorite,
  CardWrapper,
  HeartSvg,
  Img,
  ImgWrapper,
  InfoTextWrapper,
  MainTextWrapper,
  TextWrapper,
} from './CatalogCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/favorite/favorite-operations';
import { selectAdverts } from '../../redux/advert/advertSelectors';
import { selectFavoriteAdverts } from '../../redux/favorite/favorite-selectors';

export const CatalogCard = ({ carDetails }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const favorites = useSelector(selectFavoriteAdverts);
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = carDetails;

  const adressArr = getSplitArr(address, ',');
  const functionality = truncateString(functionalities[0], 18);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal === false) {
      document.body.style.overflow = 'hidden';
    }
    if (showModal === true) {
      document.body.style.overflow = 'visible';
    }
  };

  const handleAddtoFavorite = () => {
    const advert = adverts.find(object => {
      return object.id === id;
    });
    const favorite = favorites.find(object => {
      return object.id === id;
    });
    if (favorite) {
      dispatch(deleteFromFavorite(favorite._id));
    } else {
      dispatch(addToFavorite(advert));
    }
  };

  const isFavorite = favorites.some(object => object.id === id);

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} alt={make} loading="lazy" />
        <ButtonFavorite type="button" onClick={handleAddtoFavorite}>
          <HeartSvg>
            <use
              href={
                isFavorite
                  ? `${sprite}#icon-Heart-active`
                  : `${sprite}#icon-Heart-normal`
              }
            ></use>
          </HeartSvg>
        </ButtonFavorite>
      </ImgWrapper>
      <TextWrapper>
        <MainTextWrapper>
          <h4>
            {make}
            <span> {model}</span>, {year}
          </h4>
          <p>{rentalPrice}</p>
        </MainTextWrapper>
        <InfoTextWrapper>
          <p>{adressArr[1]}</p>
          <p>{adressArr[2]}</p>
          <p>{rentalCompany}</p>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <p>{type}</p>
          <p>{model}</p>
          <p>{id}</p>
          <p>{functionality}</p>
        </InfoTextWrapper>
      </TextWrapper>
      <Button handlerClick={toggleModal}>Learn more</Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FullCard onClose={toggleModal} details={carDetails} />
        </Modal>
      )}
    </CardWrapper>
  );
};
