import React, { useEffect, useState } from 'react';

import HomeContainer from '../../containers/HomeContainer';

import { getAllCategories } from '../../services/browse';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories((data && data.categories && data.categories.items) || []);
    });
  }, []);

  return <HomeContainer categories={categories} />;
}

export default Home;
