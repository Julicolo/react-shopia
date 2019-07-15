import styled from 'styled-components';

// Krinkes

export const LandingContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const StripedHeading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  & h2 {
    font-family: 'PlayFairDisplay';
    width: 50%;
    text-align: center;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 75%;
  background-color: grey;
  margin: 0 3rem;
`;

export const Star = styled.div`
  height: .7rem;
  width: 1.7rem;
  background-color: ${props => props.color || '#d9bf8f'};
  transform: rotate(45deg);
`;