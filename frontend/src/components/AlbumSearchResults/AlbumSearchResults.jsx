import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../CustomTitle';
import NewReleaseCard from '../NewReleaseCard';

import { Content, Item } from './AlbumSearchResults.styles';

function AlbumSearchResults({ albums, ignores }) {
  return (
    <>
      <CustomTitle>Albums</CustomTitle>
      <Content>
        {albums
          .filter((result) => !ignores.includes(result.id))
          .map((album) => {
            return (
              <Item key={album.id}>
                <NewReleaseCard
                  imageUrl={album.images[0].url}
                  newReleaseArtists={album.artists.map((artist) => artist.name)}
                  newReleaseName={album.name}
                />
              </Item>
            );
          })}
      </Content>
    </>
  );
}

AlbumSearchResults.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        }),
      ),
      artists: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        }),
      ),
      name: PropTypes.string,
    }),
  ).isRequired,
  ignores: PropTypes.arrayOf(PropTypes.string),
};

AlbumSearchResults.defaultProps = {
  ignores: [],
};

export default AlbumSearchResults;
