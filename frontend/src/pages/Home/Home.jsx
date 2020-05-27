import React, { useEffect, useState } from 'react';

import CategoriesList from '../../containers/CategoriesList';

import { getAllCategories } from '../../services/browse';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories((data && data.categories && data.categories.items) || []);
    });
  }, []);

  return <CategoriesList categories={categories} />;
}

export default Home;
