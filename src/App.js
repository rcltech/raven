import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions/redirectToLogin';
import { Loading } from './components/Loading';
import Card from './Components/cardHolder';
import Header from './Components/header';

export const App = () => {
  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );

  if (meLoading) {
    return <Loading />;
  }

  if (meError) console.log(meError);

  if (!userData || !userData.me) {
    return redirectToLogin();
  }

  const {
    me: { username, first_name, last_name }
  } = userData;

  return (
    <>
      <Header />
      <Card />
    </>
  );
};
