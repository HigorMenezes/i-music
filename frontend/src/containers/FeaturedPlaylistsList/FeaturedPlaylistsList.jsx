import React from 'react';
import PropTypes from 'prop-types';

import CustomTitle from '../../components/CustomTitle';
import PlaylistPaper from '../../components/PlaylistPaper';

import { List } from './FeaturedPlaylistsList.styles';

function FeaturedPlaylistsList({ featuredPlaylists }) {
  return (
    <>
      <CustomTitle>Featured Playlists</CustomTitle>
      <List>
        {featuredPlaylists.map(({ id, name, description, images }) => {
          return (
            <PlaylistPaper
              key={id}
              id={id}
              imageUrl={images[0].url}
              name={name}
              description={description}
            />
          );
        })}
      </List>
    </>
  );
}

FeaturedPlaylistsList.propTypes = {
  featuredPlaylists: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
          url: PropTypes.string,
        }),
      ),
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

FeaturedPlaylistsList.defaultProps = {
  featuredPlaylists: [],
};

export default FeaturedPlaylistsList;
