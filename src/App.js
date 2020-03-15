import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from './components/routes/homepage/Homepage';
import { Header } from './components/shared/Header';

export const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Homepage />} />
        </Switch>
      </Router>
    </div>
  );
};
