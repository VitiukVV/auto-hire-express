import styled from 'styled-components';

export const HomePageSection = styled.section`
  padding: 40px;
  box-shadow: 0 0 13px 3px grey;
  text-align: center;
  background-image: url(https://rentme.com.ua/wp-content/uploads/2017/02/arenda-avto-kharkov-min.jpg);
  background-size: cover;
  background-position: 50% 50%;
  text-align: center;
`;
export const Container = styled.div`
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
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
