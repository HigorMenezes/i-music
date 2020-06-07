import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {
  searchForExactPlaylists,
  searchForPlaylists,
  fetchMore,
} from '../../services/search';

import PlaylistSearchBestResults from '../../components/PlaylistSearchBestResults';
import PlaylistSearchResults from '../../components/PlaylistSearchResults';
import FetchMoreButton from '../../components/FetchMoreButton';

function PlaylistsSearch() {
  const [playlists, setPlaylists] = useState([]);
  const [fetchMorePlaylistsUrl, setFetchMorePlaylistsUrl] = useState('');
  const [bestPlaylistResults, setBestPlaylistResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);

    if (query.search) {
      searchForExactPlaylists(query.search).then(({ data }) => {
        setBestPlaylistResults(
          (data && data.playlists && data.playlists.items) || [],
        );
      });
      searchForPlaylists(query.search).then(({ data }) => {
        setPlaylists((data && data.playlists && data.playlists.items) || []);
        setFetchMorePlaylistsUrl(
          (data && data.playlists && data.playlists.next) || '',
        );
      });
    } else {
      setPlaylists([]);
      setBestPlaylistResults([]);
      setFetchMorePlaylistsUrl('');
    }
  }, [search]);

  function handleFetchMorePlaylistsUrl() {
    setLoading(true);
    fetchMore(fetchMorePlaylistsUrl)
      .then(({ data }) => {
        setPlaylists((prevPlaylists) => [
          ...prevPlaylists,
          ...((data && data.playlists && data.playlists.items) || []),
        ]);
        setFetchMorePlaylistsUrl(
          (data && data.playlists && data.playlists.next) || '',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {bestPlaylistResults.length > 0 && (
        <PlaylistSearchBestResults bestResults={bestPlaylistResults} />
      )}

      {playlists.length > 0 && (
        <PlaylistSearchResults
          playlists={playlists}
          ignores={bestPlaylistResults.map((bestResult) => bestResult.id)}
        />
      )}

      {fetchMorePlaylistsUrl && (
        <FetchMoreButton
          onClick={handleFetchMorePlaylistsUrl}
          loading={loading}
        >
          Fetch more
        </FetchMoreButton>
      )}
    </>
  );
}

export default PlaylistsSearch;
