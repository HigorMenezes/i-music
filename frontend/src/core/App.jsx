import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import '../styles/variables.css';
import GlobalStyle from '../styles/GlobalStyle';

import Login from '../pages/Login';
import IMusic from '../pages/IMusic';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/i-music">
            <IMusic />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
