import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CategoryPaper from '../../components/CategoryPaper';

import {
  CategoriesList,
  ShowMoreCategories,
  ShowMoreCategoriesArrow,
} from './HomeContainer.styles';

function HomeContainer({ categories }) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const categoriesListRef = useRef();

  return (
    <>
      <CategoriesList
        ref={categoriesListRef}
        style={{
          height: showMoreCategories
            ? categoriesListRef.current.scrollHeight
            : '160px',
        }}
      >
        {categories.map(({ id, name, icons }) => {
          return (
            <CategoryPaper
              key={id}
              id={id}
              name={name}
              iconUrl={icons[0].url}
            />
          );
        })}
      </CategoriesList>
      <ShowMoreCategories
        onClick={() => setShowMoreCategories(!showMoreCategories)}
      >
        <ShowMoreCategoriesArrow isShowingMore={showMoreCategories} />
      </ShowMoreCategories>
    </>
  );
}

HomeContainer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
          url: PropTypes.string,
        }),
      ),
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

HomeContainer.defaultProps = {
  categories: [],
};

export default HomeContainer;
