import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions/redirectToLogin';
import { Loading } from './components/Loading';

export const App = () => {
  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );
  const {
    me: { username, first_name, last_name }
  } = userData;

  if (meLoading) {
    return <Loading />;
  }

  if (meError) console.log(meError);

  if (!userData || !userData.me) {
    return redirectToLogin();
  }

  return (
    <>
      {`Welcome to raven, ${first_name} ${last_name} (username : ${username})!`}
    </>
  );
};
