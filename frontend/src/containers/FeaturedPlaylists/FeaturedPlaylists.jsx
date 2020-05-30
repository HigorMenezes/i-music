import React, { useState, useEffect } from 'react';

import { getAllFeaturedPlaylists } from '../../services/browse';

import Slider from '../../components/Slider';
import CustomTitle from '../../components/CustomTitle';

import FeaturedPlaylistCard from '../../components/FeaturedPlaylistCard';

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
            <FeaturedPlaylistCard
              key={featuredPlaylist.id}
              imageUrl={featuredPlaylist.images[0].url}
              featuredPlaylistName={featuredPlaylist.name}
              featuredPlaylistDescription={featuredPlaylist.description}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default FeaturedPlaylists;
