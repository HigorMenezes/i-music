import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import NavbarMenu from '../../containers/NavbarMenu';

import Home from '../../pages/Home';
import Tracks from '../../pages/Tracks';

import {
  Container,
  MainContainer,
  NavbarContainer,
  PlayerContainer,
} from './Main.styles';

function Main() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <NavbarContainer>
        <NavbarMenu />
      </NavbarContainer>
      <MainContainer>
        <Switch>
          <Route path={`${path}/`} exact>
            <Home />
          </Route>
          <Route path={`${path}/tracks`} exact>
            <Tracks />
          </Route>
          <Redirect to={`${path}/`} />
        </Switch>
      </MainContainer>
      <PlayerContainer />
    </Container>
  );
}

export default Main;
