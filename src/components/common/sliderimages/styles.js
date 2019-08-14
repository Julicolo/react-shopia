import styled from 'styled-components';
import device from '../../../helpers';

export const GalleryNavigation = styled.div`
  font-size: 2rem;
  height: 100%;
  width: 5rem;
  margin-${props => props.margin}: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  @media ${device.tabletS} {
    margin-left: 0;
    width: 3rem;
  }
`;
