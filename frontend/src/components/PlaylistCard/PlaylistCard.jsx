import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  DescriptionContainer,
  Image,
  Name,
  Description,
  TotalTracks,
} from './PlaylistCard.styles';

function PlaylistCard({ imageUrl, name, description, totalTracks }) {
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <DescriptionContainer>
        <Name>{name}</Name>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <TotalTracks>
          {totalTracks}
          &nbsp;tracks
        </TotalTracks>
      </DescriptionContainer>
    </Container>
  );
}

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  totalTracks: PropTypes.number.isRequired,
};

PlaylistCard.defaultProps = {
  description: '',
};

export default PlaylistCard;
