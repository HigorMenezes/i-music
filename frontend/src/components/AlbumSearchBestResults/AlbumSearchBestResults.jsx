import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../CustomTitle';
import NewReleaseCard from '../NewReleaseCard';

import { Content, Item } from './AlbumSearchBestResults.styles';

function AlbumSearchBestResults({ bestResults }) {
  return (
    <>
      <CustomTitle>Best result</CustomTitle>
      <Content>
        {bestResults.map((album) => {
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

AlbumSearchBestResults.propTypes = {
  bestResults: PropTypes.arrayOf(
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
};

export default AlbumSearchBestResults;
