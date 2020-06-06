import React from 'react';

import SearchBar from '../../containers/SearchBar';
import EpisodesSearch from '../../containers/EpisodesSearch';

import { Container } from './Episodes.styles';

function Episodes() {
  return (
    <Container>
      <SearchBar placeHolder="Search for a artist" />
      <EpisodesSearch />
    </Container>
  );
}

export default Episodes;
