import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import '../styles/variables.css';
import GlobalStyle from '../styles/GlobalStyle';

import Main from '../layouts/Main';

import Login from '../pages/Login';
import Home from '../pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/i-music">
            <Main>
              <Home />
            </Main>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
