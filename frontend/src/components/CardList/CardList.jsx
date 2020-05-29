import React from 'react';
import PropTypes from 'prop-types';

import { List } from './CardList.styles';

function CardList({ children }) {
  return <List>{children}</List>;
}

CardList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default CardList;
