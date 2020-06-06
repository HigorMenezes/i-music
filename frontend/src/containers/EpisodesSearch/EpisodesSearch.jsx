import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { searchForEpisodes, fetchMore } from '../../services/search';

import EpisodeSearchResults from '../../components/EpisodeSearchResults';
import FetchMoreButton from '../../components/FetchMoreButton';

function EpisodesSearch() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchMoreEpisodesUrl, setFetchMoreEpisodesUrl] = useState('');

  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);

    if (query.search) {
      searchForEpisodes(query.search).then(({ data }) => {
        setEpisodes((data && data.episodes && data.episodes.items) || []);
        setFetchMoreEpisodesUrl(
          (data && data.episodes && data.episodes.next) || '',
        );
      });
    } else {
      setEpisodes([]);
      setFetchMoreEpisodesUrl('');
    }
  }, [search]);

  function handleFetchMoreEpisodesUrl() {
    setLoading(true);
    fetchMore(fetchMoreEpisodesUrl)
      .then(({ data }) => {
        setEpisodes((prevEpisodes) => [
          ...prevEpisodes,
          ...((data && data.episodes && data.episodes.items) || []),
        ]);
        setFetchMoreEpisodesUrl(
          (data && data.episodes && data.episodes.next) || '',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {episodes.length > 0 && <EpisodeSearchResults episodes={episodes} />}
      {fetchMoreEpisodesUrl && (
        <FetchMoreButton onClick={handleFetchMoreEpisodesUrl} loading={loading}>
          Fetch more
        </FetchMoreButton>
      )}
    </>
  );
}

export default EpisodesSearch;
