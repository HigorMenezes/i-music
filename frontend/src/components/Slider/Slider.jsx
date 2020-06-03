import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardLoader from '../CardLoader';
import CustomTitle from '../CustomTitle';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  ActionsContainer,
  ActionButton,
  PreviousIcon,
  NextIcon,
} from './Slider.styles';

function Slider({ children, title, itemsPerSlide, loading }) {
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

  const hasPrevious = currentSlide >= 2;
  const hasNext =
    currentSlide < Math.floor(childrenArray.length / itemsPerSlide);

  return (
    <Container>
      <Header>
        <CustomTitle>{title}</CustomTitle>
        <ActionsContainer>
          <ActionButton
            disabled={!hasPrevious}
            onClick={() => {
              setCurrentSlide((prevState) => (hasPrevious ? prevState - 1 : 1));
            }}
          >
            <PreviousIcon />
          </ActionButton>
          <ActionButton
            disabled={!hasNext}
            onClick={() => {
              setCurrentSlide((prevState) =>
                hasNext ? prevState + 1 : childrenArray.length / itemsPerSlide,
              );
            }}
          >
            <NextIcon />
          </ActionButton>
        </ActionsContainer>
      </Header>
      <Content>
        <List itemsPerSlide={itemsPerSlide} currentSlide={currentSlide}>
          {loading ? renderLoader() : renderChildren()}
        </List>
      </Content>
    </Container>
  );
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string,
  itemsPerSlide: PropTypes.number.isRequired,
  loading: PropTypes.bool,
};

Slider.defaultProps = {
  loading: false,
  title: '',
};

export default Slider;
