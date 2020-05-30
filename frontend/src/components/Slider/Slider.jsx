import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  List,
  ListItem,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Slider.styles';

function Slider({ children, itemsPerSlide }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const childrenArray = React.Children.toArray(children);

  return (
    <Container>
      <ActionButton
        onClick={() => {
          setCurrentSlide((prevState) => (prevState >= 2 ? prevState - 1 : 1));
        }}
      >
        <PreviousIcon />
      </ActionButton>
      <Content>
        <List itemsPerSlide={itemsPerSlide} currentSlide={currentSlide}>
          {childrenArray.map((child) => (
            <ListItem key={child.key}>{child}</ListItem>
          ))}
        </List>
      </Content>
      <ActionButton
        onClick={() => {
          setCurrentSlide((prevState) =>
            prevState < Math.floor(childrenArray.length / itemsPerSlide)
              ? prevState + 1
              : childrenArray.length / itemsPerSlide,
          );
        }}
      >
        <NextIcon />
      </ActionButton>
    </Container>
  );
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  itemsPerSlide: PropTypes.number.isRequired,
};

export default Slider;
