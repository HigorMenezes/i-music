import React from 'react';

import SearchBar from '../../containers/SearchBar';
import PlaylistsSearch from '../../containers/PlaylistsSearch';

import { Container } from './Playlists.styles';

function Playlists() {
  return (
    <Container>
      <SearchBar placeHolder="Search for a playlist" />
      <PlaylistsSearch />
    </Container>
  );
}

export default Playlists;
