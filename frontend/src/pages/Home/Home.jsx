import React from 'react';

import Categories from '../../containers/Categories';
import FeaturedPlaylists from '../../containers/FeaturedPlaylists';
import NewReleases from '../../containers/NewReleases';

import { PageContainer } from './Home.styles';

function Home() {
  return (
    <PageContainer>
      <Categories />
      <FeaturedPlaylists />
      <NewReleases />
    </PageContainer>
  );
}

export default Home;
