import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions';
import { Header, Loading } from './components/shared';
import { Homepage, UserProfile, EventDetails } from './components/routes/';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw'
  }
}));

export const App = () => {
  const classes = useStyles();

  const {
    loading: meLoading,
    error: meError,
    data: userData
  } = useQuery(GET_ME, { fetchPolicy: 'network-only' });

  if (meLoading) return <Loading />;

  if (meError) console.log(meError);

  if (!userData || !userData.me) {
    return redirectToLogin();
  }

  const { me } = userData;

  return (
    <div className={classes.root}>
      <Router>
        <Header me={me} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/user" component={UserProfile} />
          <Route path="/event" component={EventDetails} />
        </Switch>
      </Router>
    </div>
  );
};
