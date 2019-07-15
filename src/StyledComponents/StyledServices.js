import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const ServiceCard = styled.div`
  color: white;
  background-color: ${props => props.bgcolor || 'black'};
  text-align: center;
  font-size: .75rem;
  padding: 1rem;
  width: 20rem;
  & p {
    margin: 0;
  }
  & p:first-child {
    font-size: 1.5rem;
  }
`;