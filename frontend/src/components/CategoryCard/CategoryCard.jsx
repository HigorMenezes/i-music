import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name } from './CategoryCard.styles';

function CategoryCard({ imageUrl, categoryName }) {
  return (
    <div>
      <Image src={imageUrl} alt={categoryName} height="100" width="100" />
      <Name>{categoryName}</Name>
    </div>
  );
}

CategoryCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default CategoryCard;
