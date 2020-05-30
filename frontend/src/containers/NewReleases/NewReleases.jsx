import React, { useState, useEffect } from 'react';

import { getAllNewReleases } from '../../services/browse';

import Slider from '../../components/Slider';
import CustomTitle from '../../components/CustomTitle';

import CardListItem from '../../components/CardListItem';

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
            <CardListItem
              key={album.id}
              id={album.id}
              imageUrl={album.images[0].url}
              name={album.name}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default NewReleases;
