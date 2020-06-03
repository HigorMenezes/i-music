import React, { useState, useEffect } from 'react';

import { getAllCategories } from '../../services/browse';

import Slider from '../../components/Slider';

import CategoryCard from '../../components/CategoryCard';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllCategories()
      .then(({ data }) => {
        setCategories((data && data.categories && data.categories.items) || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Slider title="Categories" itemsPerSlide={6} loading={loading}>
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              imageUrl={category.icons[0].url}
              categoryName={category.name}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Categories;
