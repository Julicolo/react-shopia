import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const SocialMediaButton = styled.a`
  border: 2.5px solid ${props => props.color || "black"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 3rem;
  height: 3rem
  margin: 0.5rem;
  font-size: 1.25rem;
  & svg {
    color: ${props => props.color || "black"};
  }
`;