import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { searchForExactAlbums, searchForAlbums } from '../../services/search';

import AlbumSearchBestResults from '../../components/AlbumSearchBestResults';
import AlbumSearchResults from '../../components/AlbumSearchResults';

function AlbumsSearch() {
  const [albums, setAlbums] = useState([]);
  const [bestResults, setBestResults] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);

    searchForExactAlbums(query.search).then(({ data }) => {
      setBestResults((data && data.albums && data.albums.items) || []);
    });
    searchForAlbums(query.search).then(({ data }) => {
      setAlbums((data && data.albums && data.albums.items) || []);
    });
  }, [search]);

  return (
    <>
      {bestResults.length > 0 && (
        <AlbumSearchBestResults bestResults={bestResults} />
      )}

      <AlbumSearchResults
        albums={albums}
        ignores={bestResults.map((bestResult) => bestResult.id)}
      />
    </>
  );
}

export default AlbumsSearch;
