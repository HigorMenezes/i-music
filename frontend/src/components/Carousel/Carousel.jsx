import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Carousel.styles';

function Carousel({ children, onPrevious, onNext }) {
  return (
    <Container>
      <ActionButton onClick={onPrevious}>
        <PreviousIcon />
      </ActionButton>
      <div>{children}</div>
      <ActionButton onClick={onNext}>
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
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};

Carousel.defaultProps = {
  onPrevious: null,
  onNext: null,
};

export default Carousel;
