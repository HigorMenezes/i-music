import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Image,
  Name,
  Duration,
  ButtonPlay,
  PlayIcon,
} from './EpisodeCard.styles';

function EpisodeCard({ name, imageUrl, duration }) {
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <Name>{name}</Name>
      <Duration>{duration}</Duration>
      <ButtonPlay>
        <PlayIcon />
      </ButtonPlay>
    </Container>
  );
}

EpisodeCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default EpisodeCard;
