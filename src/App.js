import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions/redirectToLogin';
import { Homepage } from './components/routes/homepage/Homepage';
import { Header } from './components/shared/Header';
import { Loading } from './components/shared/Loading';

export const App = () => {
  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );

  if (meLoading) return <Loading />;

  if (meError) console.log(meError);

  if (!userData || !userData.me) {
    return redirectToLogin();
  }

  return (
    <div style={{ width: '100vw' }}>
      <Router>
        <Header me={userData.me} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Homepage me={userData.me} />}
          />
        </Switch>
      </Router>
    </div>
  );
};
