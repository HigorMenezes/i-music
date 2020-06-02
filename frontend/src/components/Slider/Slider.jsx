import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardLoader from '../CardLoader';

import {
  Container,
  Content,
  List,
  ListItem,
  ActionsContainer,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Slider.styles';

function Slider({ children, itemsPerSlide, loading }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const childrenArray = React.Children.toArray(children);

  function renderLoader() {
    return Array.from({ length: itemsPerSlide }, (_, k) => (
      <ListItem key={k}>
        <CardLoader />
      </ListItem>
    ));
  }

  function renderChildren() {
    return childrenArray.map((child) => (
      <ListItem key={child.key}>{child}</ListItem>
    ));
  }

  return (
    <Container>
      <Content>
        <List itemsPerSlide={itemsPerSlide} currentSlide={currentSlide}>
          {loading ? renderLoader() : renderChildren()}
        </List>
      </Content>
      <ActionsContainer>
        <ActionButton
          onClick={() => {
            setCurrentSlide((prevState) =>
              prevState >= 2 ? prevState - 1 : 1,
            );
          }}
        >
          <PreviousIcon />
        </ActionButton>
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
      </ActionsContainer>
    </Container>
  );
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  itemsPerSlide: PropTypes.number.isRequired,
  loading: PropTypes.bool,
};

Slider.defaultProps = {
  loading: false,
};

export default Slider;
