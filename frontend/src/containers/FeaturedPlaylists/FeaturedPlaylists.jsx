import React, { useState, useEffect } from 'react';

import { getAllFeaturedPlaylists } from '../../services/browse';

import Slider from '../../components/Slider';

import FeaturedPlaylistCard from '../../components/FeaturedPlaylistCard';

function FeaturedPlaylists() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllFeaturedPlaylists()
      .then(({ data }) => {
        setFeaturedPlaylists(
          (data && data.playlists && data.playlists.items) || [],
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Slider title="Featured Playlists" itemsPerSlide={4} loading={loading}>
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
