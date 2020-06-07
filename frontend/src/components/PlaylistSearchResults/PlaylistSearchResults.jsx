import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../CustomTitle';
import PlaylistCard from '../PlaylistCard';

import { Content, Item } from './PlaylistSearchResults.styles';

function PlaylistSearchResults({ playlists, ignores }) {
  return (
    <>
      <CustomTitle>Playlists</CustomTitle>
      <Content>
        {playlists
          .filter((result) => !ignores.includes(result.id))
          .map((playlist) => {
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

PlaylistSearchResults.propTypes = {
  playlists: PropTypes.arrayOf(
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

PlaylistSearchResults.defaultProps = {
  ignores: [],
};

export default PlaylistSearchResults;
