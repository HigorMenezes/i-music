import React from 'react';

import SearchBar from '../../containers/SearchBar';
import AlbumsSearch from '../../containers/AlbumsSearch';

import { Container } from './Albums.styles';

function Albums() {
  return (
    <Container>
      <SearchBar placeHolder="Search for a album" />
      <AlbumsSearch />
    </Container>
  );
}

export default Albums;
