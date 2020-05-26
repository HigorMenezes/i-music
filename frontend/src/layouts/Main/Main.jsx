import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  MainContainer,
  NavbarContainer,
  PlayerContainer,
} from './Main.styles';

function Main({ children }) {
  return (
    <Container>
      <div className="group">
        <NavbarContainer />
        <MainContainer>{children}</MainContainer>
      </div>
      <PlayerContainer />
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
