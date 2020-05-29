import React, { useState, useEffect } from 'react';

import { getAllNewReleases } from '../../services/browse';

import Carousel from '../../components/Carousel';
import CustomTitle from '../../components/CustomTitle';

import CardList from '../../components/CardList';
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
      <Carousel offset={210}>
        <CardList>
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
        </CardList>
      </Carousel>
    </div>
  );
}

export default NewReleases;
