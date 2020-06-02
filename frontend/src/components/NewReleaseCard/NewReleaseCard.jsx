import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Artists } from './NewReleaseCard.styles';

function NewReleaseCard({ imageUrl, newReleaseName, newReleaseArtists }) {
  return (
    <div>
      <Image src={imageUrl} alt={newReleaseName} height="100" width="100" />
      <Name>{newReleaseName}</Name>
      <Artists>{newReleaseArtists.join(', ')}</Artists>
    </div>
  );
}

NewReleaseCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  newReleaseName: PropTypes.string.isRequired,
  newReleaseArtists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NewReleaseCard;
