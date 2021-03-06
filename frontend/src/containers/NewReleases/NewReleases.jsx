import React, { useState, useEffect } from 'react';

import { getAllNewReleases } from '../../services/browse';

import Slider from '../../components/Slider';

import NewReleaseCard from '../../components/NewReleaseCard';

function NewReleases() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNewReleases()
      .then(({ data }) => {
        setAlbums((data && data.albums && data.albums.items) || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Slider title="New Releases" itemsPerSlide={5} loading={loading}>
        {albums.map((album) => {
          return (
            <NewReleaseCard
              key={album.id}
              imageUrl={album.images[0].url}
              newReleaseName={album.name}
              newReleaseArtists={album.artists.map((artist) => artist.name)}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default NewReleases;
