import styled from 'styled-components';

export const TriangleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 11rem solid transparent;
  border-right: 11rem solid transparent;
  border-top: 3rem solid #fff;
  position: absolute;
`;


export const BannerContainer = styled.div`
  & img {
    max-width: 100%;
    width: 100%
  }
`;