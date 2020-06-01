import React from 'react';

import SearchBar from '../../containers/SearchBar';
import AlbumsSearch from '../../containers/AlbumsSearch';

function Albums() {
  return (
    <div style={{ maxWidth: '1100px', margin: '10px auto' }}>
      <SearchBar placeHolder="Search for a album" />
      <AlbumsSearch />
    </div>
  );
}

export default Albums;
