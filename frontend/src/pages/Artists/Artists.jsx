import React from 'react';

import SearchBar from '../../containers/SearchBar';
import ArtistsSearch from '../../containers/ArtistsSearch';

import { Container } from './Artists.styles';

function Artists() {
  return (
    <Container>
      <SearchBar placeHolder="Search for a artist" />
      <ArtistsSearch />
    </Container>
  );
}

export default Artists;
