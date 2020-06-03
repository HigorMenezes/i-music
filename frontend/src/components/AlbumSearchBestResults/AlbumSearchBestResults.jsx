import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../CustomTitle';
import AlbumCard from '../AlbumCard';

import { Content, Item } from './AlbumSearchBestResults.styles';

function AlbumSearchBestResults({ bestResults }) {
  return (
    <>
      <CustomTitle>Best result</CustomTitle>
      <Content>
        {bestResults.map((album) => {
          return (
            <Item key={album.id}>
              <AlbumCard
                imageUrl={album.images[0].url}
                artists={album.artists.map((artist) => artist.name)}
                name={album.name}
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
