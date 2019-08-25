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
