import React from 'react';
import PropTypes from 'prop-types';

import { msFormatter } from '../../utils/timeFormatter';

import EpisodeCard from '../EpisodeCard';
import CustomTitle from '../CustomTitle';

import { Content, Item } from './EpisodeSearchResults.styles';

function EpisodeSearchResults({ episodes }) {
  return (
    <>
      <CustomTitle>Episodes</CustomTitle>
      <Content>
        {episodes.map((episode) => (
          <Item key={episode.id}>
            <EpisodeCard
              name={episode.name}
              duration={msFormatter(episode.duration_ms)}
              imageUrl={(episode.images[0] && episode.images[0].url) || ''}
            />
          </Item>
        ))}
      </Content>
    </>
  );
}

EpisodeSearchResults.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
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

export default EpisodeSearchResults;
