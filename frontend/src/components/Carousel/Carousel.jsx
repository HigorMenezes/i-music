import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Carousel.styles';

function Carousel({ children, offset }) {
  const contentRef = useRef();

  function handlePrevious() {
    contentRef.current.scrollLeft -= offset;
  }

  function handleNext() {
    contentRef.current.scrollLeft += offset;
  }

  return (
    <Container>
      <ActionButton onClick={handlePrevious}>
        <PreviousIcon />
      </ActionButton>
      <Content ref={contentRef}>{children}</Content>
      <ActionButton onClick={handleNext}>
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
  offset: PropTypes.number.isRequired,
};

export default Carousel;
