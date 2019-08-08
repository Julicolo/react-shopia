import React, {Fragment} from 'react';

import Brands from '../common/brands';
import Services from '../common/services';
import {SwitchGames, XboxOneGames, PS4Games} from '../products';

import {
  CollectionContainer,
  BaseContainer,
  GamesWrapper,
} from '../products/styles';
import {
  Main,
  ImagesContainer,
  FeaturedImage,
  UpcomingReleasesContainer,
  UpcomingReleases,
} from './styles';

export default function App() {
  return (
    <Fragment>
      <Main>
        <ImagesContainer>
          <UpcomingReleasesContainer>
            <UpcomingReleases>
              <div>
                <img
                  src={require('../../images/highlighted/1.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/2.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/3.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/4.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/5.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/6.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/7.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/8.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/1.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/2.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/3.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/4.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
              <div>
                <img
                  src={require('../../images/highlighted/5.jpg')}
                  alt="leather boots"
                />
                <img
                  src={require('../../images/highlighted/6.jpg')}
                  alt="leather & metal bracelet"
                />
              </div>
            </UpcomingReleases>
          </UpcomingReleasesContainer>
          <FeaturedImage>
            <img
              src={require('../../images/highlighted/big.jpg')}
              alt="Paris Hilton Collection"
            />
          </FeaturedImage>
        </ImagesContainer>
        <Services />
        <GamesWrapper>
          <h2>New Nintendo Switch Games</h2>
          <CollectionContainer>
            <SwitchGames />
          </CollectionContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New PlayStation 4 Games</h2>
          <CollectionContainer>
            <PS4Games />
          </CollectionContainer>
        </GamesWrapper>
        <GamesWrapper>
          <h2>New Xbox One Games</h2>
          <CollectionContainer>
            <XboxOneGames />
          </CollectionContainer>
        </GamesWrapper>
        <h2>Our Brands</h2>
        <BaseContainer>
          <Brands className="brands" />
        </BaseContainer>
      </Main>
    </Fragment>
  );
}
