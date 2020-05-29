import React, { useState, useEffect } from 'react';

import { getAllCategories } from '../../services/browse';

import Carousel from '../../components/Carousel';
import CustomTitle from '../../components/CustomTitle';

import CardList from '../../components/CardList';
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
      <Carousel>
        <CardList>
          {categories.map((category) => {
            return (
              <CardListItem
                id={category.id}
                imageUrl={category.icons[0].url}
                name={category.name}
              />
            );
          })}
        </CardList>
      </Carousel>
    </div>
  );
}

export default Categories;
