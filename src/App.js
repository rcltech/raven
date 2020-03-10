import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from './components/routes/homepage/Homepage';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
      </Switch>
    </Router>
  );
};
