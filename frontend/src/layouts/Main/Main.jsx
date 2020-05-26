import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import NavbarMenu from '../../containers/NavbarMenu';

import Home from '../../pages/Home';

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
      <div className="group">
        <NavbarContainer>
          <NavbarMenu />
        </NavbarContainer>
        <MainContainer>
          <Switch>
            <Route path={`${path}/`} exact>
              <Home />
            </Route>
            <Redirect to={`${path}/`} />
          </Switch>
        </MainContainer>
      </div>
      <PlayerContainer />
    </Container>
  );
}

export default Main;
