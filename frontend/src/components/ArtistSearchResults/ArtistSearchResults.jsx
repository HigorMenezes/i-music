import React from 'react';
import PropTypes from 'prop-types';

import ArtistCard from '../ArtistCard';
import CustomTitle from '../CustomTitle';

import { Content, Item } from './ArtistSearchResults.styles';

function ArtistSearchResults({ artists }) {
  return (
    <>
      <CustomTitle>Artists</CustomTitle>
      <Content>
        {artists.map((artist) => (
          <Item key={artist.id}>
            <ArtistCard
              name={artist.name}
              imageUrl={(artist.images[0] && artist.images[0].url) || ''}
              genres={artist.genres}
              followers={artist.followers.total}
            />
          </Item>
        ))}
      </Content>
    </>
  );
}

ArtistSearchResults.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.shape({
        total: PropTypes.number,
      }),
      genres: PropTypes.arrayOf(PropTypes.string),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        }),
      ),
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default ArtistSearchResults;
