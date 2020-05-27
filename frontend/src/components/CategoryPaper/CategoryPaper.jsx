import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from './CategoryPaper.styles';

function CategoryPaper({ id, name, iconUrl }) {
  return (
    <Paper iconUrl={iconUrl}>
      <span className="category-name">{name}</span>
    </Paper>
  );
}

CategoryPaper.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default CategoryPaper;
