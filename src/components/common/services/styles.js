import styled from 'styled-components';

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-flow: column wrap;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  flex: 1 0 auto;
  align-items: center;
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
  &.left {
    width: 30%;
    ::before {
      content: '';
      position: absolute;
      right: -2.3rem;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-left: 37px solid ${props => props.bgcolor || 'black'};
      z-index: 2000;
    }
  }
  &.middle {
    width: 40%;
    ::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-right: 37px solid ${props => props.bgcolor || '#222'};
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-left: 37px solid ${props => props.bgcolor || '#222'};
    }
  }
  &.right {
    width: 30%;
    ::before {
      content: '';
      position: absolute;
      left: -2.3rem;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-right: 37px solid ${props => props.bgcolor || 'black'};
    }
  }
`;
