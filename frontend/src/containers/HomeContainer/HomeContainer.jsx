import React from 'react';
import PropTypes from 'prop-types';

import CategoryPaper from '../../components/CategoryPaper';

import { CategoriesList } from './HomeContainer.styles';

function HomeContainer({ categories }) {
  return (
    <CategoriesList>
      {categories.map(({ id, name, icons }) => {
        return (
          <CategoryPaper key={id} id={id} name={name} iconUrl={icons[0].url} />
        );
      })}
    </CategoriesList>
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
