import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Description } from './FeaturedPlaylistCard.styles';

function FeaturedPlaylistCard({
  imageUrl,
  featuredPlaylistName,
  featuredPlaylistDescription,
}) {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={featuredPlaylistName}
        height="100"
        width="100"
      />
      <Name>{featuredPlaylistName}</Name>
      <Description>{featuredPlaylistDescription}</Description>
    </div>
  );
}

FeaturedPlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  featuredPlaylistName: PropTypes.string.isRequired,
  featuredPlaylistDescription: PropTypes.string.isRequired,
};

export default FeaturedPlaylistCard;
