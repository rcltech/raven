import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from './gql/users';
import { redirectToLogin } from './functions/redirectToLogin';
import { Loading } from './components/Loading';
import { Header } from './components/Header';
import { MediaCard } from './components/MediaCard';

export const App = () => {
  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );

  if (meLoading) {
    return <Loading />;
  }

  if (meError) console.log(meError);

  if (!userData || !userData.me) return redirectToLogin();
  else {
    const { me } = userData;
    console.log(me);
  }

  return (
    <>
      <Header />
      <MediaCard />
    </>
  );
};
