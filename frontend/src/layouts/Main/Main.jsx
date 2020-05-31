import React from 'react';
import PropTypes from 'prop-types';

import NavbarMenu from '../../containers/NavbarMenu';

import {
  Container,
  MainContainer,
  NavbarContainer,
  PlayerContainer,
} from './Main.styles';

function Main({ children }) {
  return (
    <Container>
      <NavbarContainer>
        <NavbarMenu />
      </NavbarContainer>
      <MainContainer>{children}</MainContainer>
      <PlayerContainer />
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Main;
