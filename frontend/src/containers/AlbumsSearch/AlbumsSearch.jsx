import React, { useState, useEffect } from 'react';

import useQuery from '../../hooks/useQuery';
import { searchForAlbums } from '../../services/search';

import NewReleaseCard from '../../components/NewReleaseCard';

function AlbumsSearch() {
  const query = useQuery();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    searchForAlbums(query.get('search')).then(({ data }) => {
      setAlbums((data && data.albums && data.albums.items) || []);
    });
  }, [query.get('search')]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
      {albums.map((album) => {
        return (
          <div key={album.id} style={{ width: '25%', padding: 10 }}>
            <NewReleaseCard
              imageUrl={album.images[0].url}
              newReleaseArtists={album.artists.map((artist) => artist.name)}
              newReleaseName={album.name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AlbumsSearch;
