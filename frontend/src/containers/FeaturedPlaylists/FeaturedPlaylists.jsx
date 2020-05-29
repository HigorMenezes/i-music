import React, { useState, useEffect } from 'react';

import { getAllFeaturedPlaylists } from '../../services/browse';

import Carousel from '../../components/Carousel';
import CustomTitle from '../../components/CustomTitle';

import CardList from '../../components/CardList';
import CardListItem from '../../components/CardListItem';

function FeaturedPlaylists() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    getAllFeaturedPlaylists().then(({ data }) => {
      setFeaturedPlaylists(
        (data && data.playlists && data.playlists.items) || [],
      );
    });
  }, []);

  return (
    <div>
      <CustomTitle>Featured Playlists</CustomTitle>
      <Carousel offset={210}>
        <CardList>
          {featuredPlaylists.map((featuredPlaylist) => {
            return (
              <CardListItem
                key={featuredPlaylist.id}
                id={featuredPlaylist.id}
                imageUrl={featuredPlaylist.images[0].url}
                name={featuredPlaylist.name}
                description={featuredPlaylist.description}
              />
            );
          })}
        </CardList>
      </Carousel>
    </div>
  );
}

export default FeaturedPlaylists;
