import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/i-music">
          <Home />
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
