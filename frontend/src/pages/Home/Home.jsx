import React, { useEffect, useState } from 'react';

import CategoriesList from '../../containers/CategoriesList';
import FeaturedPlaylistsList from '../../containers/FeaturedPlaylistsList';

import { PageContainer } from './Home.styles';

import {
  getAllCategories,
  getAllFeaturedPlaylists,
} from '../../services/browse';

function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories((data && data.categories && data.categories.items) || []);
    });
  }, []);

  useEffect(() => {
    getAllFeaturedPlaylists().then(({ data }) => {
      setFeaturedPlaylists(
        (data && data.playlists && data.playlists.items) || [],
      );
    });
  }, []);

  return (
    <PageContainer>
      <CategoriesList categories={categories} />
      <FeaturedPlaylistsList featuredPlaylists={featuredPlaylists} />
    </PageContainer>
  );
}

export default Home;
