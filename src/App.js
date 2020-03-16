import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions/redirectToLogin';
import { Homepage } from './components/routes/homepage/Homepage';
import { Header } from './components/shared/Header';
import { Loading } from './components/shared/Loading';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw'
  }
}));

export const App = () => {
  const classes = useStyles();

  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );

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
          <Route exact path="/" component={() => <Homepage me={me} />} />
        </Switch>
      </Router>
    </div>
  );
};
