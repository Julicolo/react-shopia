import styled from 'styled-components';

export const ReviewBannerContainer = styled.div`
  background-color: ${props => props.bgcolor || '#d9bf8f'};
  margin: 1rem 0 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 0 calc((100% - 90rem) / 2);
`;

export const Review = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  padding: 2rem 0;
  text-align: ${props => props.align || 'left'};
  & section {
    margin-top: 2rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    font-style: oblique;
    & p {
      display: flex;
      flex: 1 0 auto;
      align-items: center;
      color: white;
    }
    & h2 {
      margin: 1rem 0;
    }
    & h4 {
      margin: 0.5rem 0;
      color: grey;
      text-transform: uppercase;
      font-style: normal;
    }
  }
`;

export const SmallTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 9rem solid transparent;
  border-right: 9rem solid transparent;
  border-top: 1.75rem solid #fff;
  position: absolute;
`;
