import styled from 'styled-components';

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  flex: 1 0 auto;
  align-items: center;
  color: white;
  background-color: ${props => props.bgcolor || 'black'};
  text-align: center;
  font-size: 0.75rem;
  padding: 1rem;
  position: relative;
  & svg {
    font-size: 2.25rem;
  }
  & p {
    margin: 0;
  }
  & p:first-child {
    font-size: 1.5rem;
  }
  &.left::before {
    content: '';
    position: absolute;
    right: -2.3rem;
    bottom: 0;
    border-top: 37px solid transparent;
    border-bottom: 37px solid transparent;
    border-left: 37px solid ${props => props.bgcolor || 'black'};
    z-index: 2000;
  }
  &.middle {
    width: 22rem;
    margin: 1.5rem;
    ::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-right: 37px solid ${props => props.bgcolor || 'white'};
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-left: 37px solid ${props => props.bgcolor || 'white'};
    }
  }
  &.right::before {
    content: '';
    position: absolute;
    left: -2.3rem;
    bottom: 0;
    border-top: 37px solid transparent;
    border-bottom: 37px solid transparent;
    border-right: 37px solid ${props => props.bgcolor || 'black'};
  }
`;