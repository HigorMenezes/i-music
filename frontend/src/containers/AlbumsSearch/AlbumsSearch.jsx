import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {
  searchForExactAlbums,
  searchForAlbums,
  fetchMore,
} from '../../services/search';

import AlbumSearchBestResults from '../../components/AlbumSearchBestResults';
import AlbumSearchResults from '../../components/AlbumSearchResults';
import FetchMoreButton from '../../components/FetchMoreButton';

function AlbumsSearch() {
  const [albums, setAlbums] = useState([]);
  const [fetchMoreAlbumsUrl, setFetchMoreAlbumsUrl] = useState('');
  const [bestAlbumResults, setBestAlbumResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);

    if (query.search) {
      searchForExactAlbums(query.search).then(({ data }) => {
        setBestAlbumResults((data && data.albums && data.albums.items) || []);
      });
      searchForAlbums(query.search).then(({ data }) => {
        setAlbums((data && data.albums && data.albums.items) || []);
        setFetchMoreAlbumsUrl((data && data.albums && data.albums.next) || '');
      });
    } else {
      setAlbums([]);
      setBestAlbumResults([]);
      setFetchMoreAlbumsUrl('');
    }
  }, [search]);

  function handleFetchMoreAlbumsUrl() {
    setLoading(true);
    fetchMore(fetchMoreAlbumsUrl)
      .then(({ data }) => {
        setAlbums((prevAlbums) => [
          ...prevAlbums,
          ...((data && data.albums && data.albums.items) || []),
        ]);
        setFetchMoreAlbumsUrl((data && data.albums && data.albums.next) || '');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {bestAlbumResults.length > 0 && (
        <AlbumSearchBestResults bestResults={bestAlbumResults} />
      )}

      {albums.length > 0 && (
        <AlbumSearchResults
          albums={albums}
          ignores={bestAlbumResults.map((bestResult) => bestResult.id)}
        />
      )}

      {fetchMoreAlbumsUrl && (
        <FetchMoreButton onClick={handleFetchMoreAlbumsUrl} loading={loading}>
          Fetch more
        </FetchMoreButton>
      )}
    </>
  );
}

export default AlbumsSearch;
