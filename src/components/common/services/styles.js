import styled from 'styled-components';
import device from '../../../helpers';

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: 850px) {
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
  position: relative;
  height: 6.5rem;
  overflow: hidden;
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
    width: 27.5%;
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
    @media ${device.mobileL} {
      padding-bottom: 5rem;
    }
    @media ${device.tablet} {
      width: 100%;
      justify-content: center;
      height: 135px;
      ::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0px;
        border-top: 8.5rem solid transparent;
        border-bottom: 0px solid transparent;
        border-left: none;
        border-right: 10.8rem solid black;
      }
      ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        border-top: 8.5rem solid transparent;
        border-bottom: 0px solid transparent;
        border-right: none;
        border-left: 10.8rem solid black;
      }
    }
  }
  &.middle {
    width: 45%;
    padding: 0 3.5rem;
    ::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-top: 50px solid transparent;
      border-bottom: 56px solid transparent;
      border-right: 58px solid ${props => props.bgcolor || '#1cc01c'};
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 50px solid transparent;
      border-bottom: 56px solid transparent;
      border-left: 58px solid ${props => props.bgcolor || '#1cc01c'};
    }
    @media ${device.tablet} {
      width: 100%;
      justify-content: center;
      height: 10rem;
      ::before,
      ::after {
        display: none;
      }
    }
    @media ${device.mobileL} {
      height: 5rem;
    }
  }
  &.right {
    width: 27.5%;
    ::before {
      content: '';
      position: absolute;
      left: -2.3rem;
      bottom: 0;
      border-top: 37px solid transparent;
      border-bottom: 37px solid transparent;
      border-right: 37px solid ${props => props.bgcolor || 'black'};
    }
    @media ${device.tablet} {
      width: 100%;
      height: 135px;
      justify-content: center;
      ::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        border-top: 0em solid transparent;
        border-bottom: 8.5rem solid transparent;
        border-left: 10.8rem solid black;
        border-right: none;
      }
      ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        border-top: 0em solid transparent;
        border-bottom: 8.5rem solid transparent;
        border-right: 10.8rem solid black;
      }
      @media ${device.mobileL} {
        padding-top: 5rem;
      }
    }
  }
`;
