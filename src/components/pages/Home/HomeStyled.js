import styled from 'styled-components';

export const HomePageContainer = styled.div`
  /* background-color: #3470ff; */
  /* color: white; */
  padding: 40px;
  box-shadow: 0 0 13px 3px grey;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

export const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
`;

export const ServiceItem = styled.li`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  padding: 12px 50px;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: #0b44cd;
  }
`;
