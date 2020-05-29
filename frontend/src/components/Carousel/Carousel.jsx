import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Carousel.styles';

function Carousel({ children }) {
  return (
    <Container>
      <ActionButton side="l">
        <PreviousIcon />
      </ActionButton>
      <div>{children}</div>
      <ActionButton side="r">
        <NextIcon />
      </ActionButton>
    </Container>
  );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Carousel;
