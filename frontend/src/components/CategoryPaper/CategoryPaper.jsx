import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Name } from './CategoryPaper.styles';

function CategoryPaper({ id, name, iconUrl }) {
  return (
    <Container data-id={id}>
      <Image src={iconUrl} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

CategoryPaper.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default CategoryPaper;
