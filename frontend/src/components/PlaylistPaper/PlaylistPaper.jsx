import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Name, Description } from './PlaylistPaper.styles';

function PlaylistPaper({ id, imageUrl, name, description }) {
  return (
    <Container data-id={id}>
      <Image imageUrl={imageUrl} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  );
}

PlaylistPaper.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PlaylistPaper;
