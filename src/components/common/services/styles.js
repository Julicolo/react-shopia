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
  font-size: 1rem;
  position: relative;
  height: 4rem;
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
    @media ${device.tablet} {
      width: 100%;
      justify-content: center;
      ::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0px;
        border-top: 2rem solid transparent;
        border-bottom: none;
        border-left: none;
        border-right: 10.8rem solid black;
      }
      ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        border-top: 2rem solid transparent;
        border-bottom: none;
        border-right: none;
        border-left: 10.8rem solid black;
      }
    }
    @media ${device.mobileL} {
      width: 100%;
      justify-content: center;
      ::before {
        border-top: 1rem solid transparent;
      }
      ::after {
        border-top: 1rem solid transparent;
      }
    }
  }
  &.middle {
    width: 45%;
    ::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-top: 32px solid transparent;
      border-bottom: 32px solid transparent;
      border-right: 50px solid ${props => props.bgcolor || 'var(--main-color);'};
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 32px solid transparent;
      border-bottom: 32px solid transparent;
      border-left: 50px solid ${props => props.bgcolor || 'var(--main-color);'};
    }
    @media ${device.tablet} {
      width: 100%;
      justify-content: center;
      height: 4rem;
      ::before,
      ::after {
        display: none;
      }
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
      justify-content: center;
      ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: auto;
        border-top: 2rem solid black;
        border-bottom: none;
        border-left: none;
        border-right: 10.8rem solid transparent;
      }
      ::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        border-top: none;
        border-bottom: 2rem solid transparent;
        border-right: 10.8rem solid black;
      }
    }
    @media ${device.mobileL} {
      ::before {
        border-top: 1rem solid black;
      }
      ::after {
        border-bottom: 1rem solid transparent;
      }
    }
  }
`;
