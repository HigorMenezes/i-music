import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Image,
  DescriptionContainer,
  Name,
  Genres,
  FollowersContainer,
  Followers,
  FollowerIcon,
} from './ArtistCard.styles';

function ArtistCard({ name, imageUrl, genres, followers }) {
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <DescriptionContainer>
        <Name>{name}</Name>
        <Genres>{genres.join(', ')}</Genres>
        <FollowersContainer>
          <Followers>
            {new Intl.NumberFormat('EN-US').format(followers)}
          </Followers>

          <FollowerIcon />
        </FollowersContainer>
      </DescriptionContainer>
    </Container>
  );
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  followers: PropTypes.number.isRequired,
};

export default ArtistCard;
