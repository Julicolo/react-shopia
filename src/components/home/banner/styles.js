import styled from 'styled-components';

export const TriangleContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 11rem solid transparent;
  border-right: 11rem solid transparent;
  border-top: 3rem solid ${props => (props.color ? props.color : 'black')};
  position: absolute;
  z-index: 2000;
`;

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 20rem;
  position: relative;
  & img {
    max-width: 100%;
    width: 100%;
    height: 20rem;
  }
`;

export const BannerButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  bottom: 7.5%;
  left: 45%;
`;

export const BannerButton = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${props => (props.selected ? '#d9bf8f' : 'grey')};
  margin: 0.3rem;
  transform: rotate(45deg);
`;
