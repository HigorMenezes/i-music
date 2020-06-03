import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Artists } from './AlbumCard.styles';

function AlbumCard({ imageUrl, name, artists }) {
  return (
    <div>
      <Image src={imageUrl} alt={name} height="100" width="100" />
      <Name>{name}</Name>
      <Artists>{artists.join(', ')}</Artists>
    </div>
  );
}

AlbumCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AlbumCard;
