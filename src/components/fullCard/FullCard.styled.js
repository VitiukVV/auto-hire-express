import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  position: relative;
  padding: 40px;
  background: #fff;
  border-radius: 24px;
  width: 541px;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
`;

export const CloseSvg = styled.svg`
  stroke: black;
  width: 24px;
  height: 24px;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgWrapperModal = styled.div`
  overflow: hidden;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
  background: var(--color-back-second);
`;

export const ImgModal = styled.img`
  width: 461px;
  height: 248px;
`;

export const ModalTextWrapper = styled.div`
  margin-bottom: 24px;
`;

export const MainTextWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 8px;

  > h4 {
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
  line-height: calc(18 / 12);

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:nth-child(3) {
    margin-bottom: 14px;
  }

  > p {
    &:not(:last-child) {
      padding-right: 6px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      margin-right: 6px;
    }
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: var(--color-text-main);
`;

export const Paragraph = styled(Description)`
  font-weight: 500;
  margin-bottom: 8px;
`;
export const ConditionsTextWrapper = styled.div`
  display: flex;
  column-gap: 8px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ConditionsText = styled.p`
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #363535;

  > span {
    font-weight: 600;
    color: var(--color-accent);
  }
`;
