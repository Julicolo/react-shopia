import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaContainer, SocialMediaButton } 
  from '../StyledComponents/SocialMedia';
import { StyledHeader, TopBar, Button, Menu, Title } 
  from '../StyledComponents/StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
      <TopBar>
        <div>
          <FontAwesomeIcon icon="phone-alt" />
          <span>Call +06-31950040</span>
        </div>
        <div>
          <span>Welcome Hulio!</span>
          <Button>My Account</Button>
          <Button>My Wishlist</Button>
          <Button>Login</Button>
        </div>
      </TopBar>
      <Menu>
        <div>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Categories</li>
            <li>Pages</li>
          </ul>
        </div>
        <Title>Sophia</Title>
        <SocialMediaContainer>
          <SocialMediaButton 
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </SocialMediaButton>
          <SocialMediaButton 
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </SocialMediaButton>
          <SocialMediaButton 
            href="https://wwww.pinterest.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={["fab", "pinterest"]} />
          </SocialMediaButton>
          <SocialMediaButton 
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            color={'#d9bf8f'}
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </SocialMediaButton>          
        </SocialMediaContainer>
      </Menu>
    </StyledHeader>
  );
};