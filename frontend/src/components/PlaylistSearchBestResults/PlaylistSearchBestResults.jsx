import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../CustomTitle';
import PlaylistCard from '../PlaylistCard';

import { Content, Item } from './PlaylistSearchBestResults.styles';

function PlaylistSearchBestResults({ bestResults }) {
  return (
    <>
      <CustomTitle>Best result</CustomTitle>
      <Content>
        {bestResults.map((playlist) => {
          return (
            <Item key={playlist.id}>
              <PlaylistCard
                imageUrl={playlist.images[0].url}
                name={playlist.name}
                description={playlist.description}
                totalTracks={playlist.tracks.total}
              />
            </Item>
          );
        })}
      </Content>
    </>
  );
}

PlaylistSearchBestResults.propTypes = {
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

export default PlaylistSearchBestResults;
