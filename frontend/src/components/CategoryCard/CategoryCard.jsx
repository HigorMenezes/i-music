import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name } from './CategoryCard.styles';

function CategoryCard({ imageUrl, categoryName }) {
  return (
    <div>
      <Image src={imageUrl} alt={categoryName} />
      <Name>{categoryName}</Name>
    </div>
  );
}

CategoryCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default CategoryCard;
