import React, { useState, useEffect } from 'react';

import { getAllFeaturedPlaylists } from '../../services/browse';

import Slider from '../../components/Slider';
import CustomTitle from '../../components/CustomTitle';

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
      <Slider itemsPerSlide={3}>
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
      </Slider>
    </div>
  );
}

export default FeaturedPlaylists;
