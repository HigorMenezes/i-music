import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Main from '../../layouts/Main';

import Home from '../Home';
import Albums from '../Albums';
import Artists from '../Artists';
import Episodes from '../Episodes';
import Playlists from '../Playlists';
import Shows from '../Shows';
import Tracks from '../Tracks';

function IMusic() {
  const { path } = useRouteMatch();

  return (
    <Main>
      <Switch>
        <Route path={`${path}/`} exact>
          <Home />
        </Route>
        <Route path={`${path}/albums`}>
          <Albums />
        </Route>
        <Route path={`${path}/artists`}>
          <Artists />
        </Route>
        <Route path={`${path}/episodes`}>
          <Episodes />
        </Route>
        <Route path={`${path}/playlists`}>
          <Playlists />
        </Route>
        <Route path={`${path}/shows`}>
          <Shows />
        </Route>
        <Route path={`${path}/tracks`}>
          <Tracks />
        </Route>
        <Redirect to={`${path}`} />
      </Switch>
    </Main>
  );
}

export default IMusic;
