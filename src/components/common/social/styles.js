import styled from 'styled-components';

export const SocialMediaButton = styled.a`
  border: 2.5px solid ${props => props.color || 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 2rem;
  height: 2rem
  margin: 0.5rem;
  font-size: .75rem;
  & svg {
    color: ${props => props.color || 'black'};
  }
`;
