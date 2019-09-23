import styled from 'styled-components';
import device from '../../../helpers';

export const GalleryNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 2rem;
  height: 100%;
  width: 5rem;
  margin-${props => props.margin}: 1rem;
  @media ${device.tabletS} {
    width: 3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.25rem;
    height: 3rem;
    width: 2rem;
    margin: 0;
    border: 1px solid #3c3c3c;
  }
`;

export const UpcomingGame = styled.div`
  margin: 0 2rem 2rem 0;
  height: auto;
  max-height: 250px;
  max-width: 100%;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--main-color);
    width: 100%;
    text-align: center;
  }
  button {
    position: absolute;
    display: none;
    bottom: 50%;
    left: 0;
    background-color: var(--friendly-orange);
    border-radius: 0.3rem;
    outline: none;
    border: none;
    height: 1.5rem;
    width: 75%;
    color: white;
    margin: 0px 1.2rem;
    cursor: pointer;
  }
  :hover {
    img {
      opacity: 0.5;
    }
    button {
      display: block;
    }
  }
  @media ${device.tabletM} {
    margin: 0 1rem 1rem 0;
  }
`;
