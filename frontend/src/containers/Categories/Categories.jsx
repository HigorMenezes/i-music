import React, { useState, useEffect } from 'react';

import { getAllCategories } from '../../services/browse';
import customFetch from '../../services/customFetch';

import Carousel from '../../components/Carousel';
import CustomTitle from '../../components/CustomTitle';

import CardList from '../../components/CardList';
import CardListItem from '../../components/CardListItem';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [nextFetchUrl, setNextFetchUrl] = useState();
  const [previousFetchUrl, setPreviousFetchUrl] = useState();

  useEffect(() => {
    getAllCategories().then(({ data }) => {
      setCategories((data && data.categories && data.categories.items) || []);
      setNextFetchUrl(
        (data && data.categories && data.categories.next) || null,
      );
      setPreviousFetchUrl(
        (data && data.categories && data.categories.previous) || null,
      );
    });
  }, []);

  function handleNext() {
    if (nextFetchUrl) {
      customFetch(nextFetchUrl).then(({ data }) => {
        setCategories((data && data.categories && data.categories.items) || []);
        setNextFetchUrl(
          (data && data.categories && data.categories.next) || null,
        );
        setPreviousFetchUrl(
          (data && data.categories && data.categories.previous) || null,
        );
      });
    }
  }

  function handlePrevious() {
    if (previousFetchUrl) {
      customFetch(previousFetchUrl).then(({ data }) => {
        setCategories((data && data.categories && data.categories.items) || []);
        setNextFetchUrl(
          (data && data.categories && data.categories.next) || null,
        );
        setPreviousFetchUrl(
          (data && data.categories && data.categories.previous) || null,
        );
      });
    }
  }

  return (
    <div>
      <CustomTitle>Categories</CustomTitle>
      <Carousel onNext={handleNext} onPrevious={handlePrevious}>
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
