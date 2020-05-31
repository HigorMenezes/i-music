import React, { useState, useEffect } from 'react';

import { getAllNewReleases } from '../../services/browse';

import Slider from '../../components/Slider';
import CustomTitle from '../../components/CustomTitle';

import NewReleaseCard from '../../components/NewReleaseCard';

function NewReleases() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAllNewReleases().then(({ data }) => {
      setAlbums((data && data.albums && data.albums.items) || []);
    });
  }, []);

  return (
    <div>
      <CustomTitle>New Releases</CustomTitle>
      <Slider itemsPerSlide={4}>
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
