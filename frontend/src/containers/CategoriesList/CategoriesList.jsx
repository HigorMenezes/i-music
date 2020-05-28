import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CategoryPaper from '../../components/CategoryPaper';
import CustomTitle from '../../components/CustomTitle';

import { List, ShowMore, ShowMoreArrow } from './CategoriesList.styles';

function CategoriesList({ categories }) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const listRef = useRef();

  return (
    <>
      <CustomTitle>Categories</CustomTitle>
      <List ref={listRef} showAll={showMoreCategories}>
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
      </List>
      <ShowMore onClick={() => setShowMoreCategories(!showMoreCategories)}>
        <ShowMoreArrow isShowingMore={showMoreCategories} />
      </ShowMore>
    </>
  );
}

CategoriesList.propTypes = {
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

CategoriesList.defaultProps = {
  categories: [],
};

export default CategoriesList;
