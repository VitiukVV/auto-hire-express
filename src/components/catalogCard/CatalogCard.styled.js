import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;

  /* &:last-child {
    margin-top: auto;
  } */
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: rgba(18, 20, 23, 0.1);
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
`;

export const HeartSvg = styled.svg`
  width: 18px;
  height: 18px;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.3);
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 28px;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  margin-bottom: 8px;

  > h4 {
    width: 154px;
    > span {
      color: var(--color-accent);
    }
  }
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  color: var(--color-text-prescription);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  > p {
    padding: 0 5px;
    &:first-child {
      padding-left: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid var(--color-text-prescription);
    }
  }
`;
