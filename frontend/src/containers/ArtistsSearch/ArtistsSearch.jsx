import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { searchForArtists, fetchMore } from '../../services/search';

import ArtistSearchResults from '../../components/ArtistSearchResults';
import FetchMoreButton from '../../components/FetchMoreButton';

function ArtistsSearch() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchMoreArtistsUrl, setFetchMoreArtistsUrl] = useState('');

  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);

    if (query.search) {
      searchForArtists(query.search).then(({ data }) => {
        setArtists((data && data.artists && data.artists.items) || []);
        setFetchMoreArtistsUrl(
          (data && data.artists && data.artists.next) || '',
        );
      });
    } else {
      setArtists([]);
      setFetchMoreArtistsUrl('');
    }
  }, [search]);

  function handleFetchMoreArtistsUrl() {
    setLoading(true);
    fetchMore(fetchMoreArtistsUrl)
      .then(({ data }) => {
        setArtists((prevArtists) => [
          ...prevArtists,
          ...((data && data.artists && data.artists.items) || []),
        ]);
        setFetchMoreArtistsUrl(
          (data && data.artists && data.artists.next) || '',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {artists.length > 0 && <ArtistSearchResults artists={artists} />}
      {fetchMoreArtistsUrl && (
        <FetchMoreButton onClick={handleFetchMoreArtistsUrl} loading={loading}>
          Fetch more
        </FetchMoreButton>
      )}
    </>
  );
}

export default ArtistsSearch;
