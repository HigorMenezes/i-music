import React, { useState, useEffect } from 'react';

import { getAllCategories } from '../../services/browse';

import Slider from '../../components/Slider';
import CustomTitle from '../../components/CustomTitle';

import CardListItem from '../../components/CardListItem';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories((data && data.categories && data.categories.items) || []);
    });
  }, []);

  return (
    <div>
      <CustomTitle>Categories</CustomTitle>
      <Slider itemsPerSlide={6}>
        {categories.map((category) => {
          return (
            <CardListItem
              key={category.id}
              id={category.id}
              imageUrl={category.icons[0].url}
              name={category.name}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Categories;
