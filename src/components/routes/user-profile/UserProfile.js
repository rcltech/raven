import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../../gql/users';
import { Loading } from '../../shared/Loading';
import { Header } from '../../shared/Header';

export const UserProfile = () => {
  const { data, loading, error } = useQuery(GET_ME);

  if (error) console.log(error);
  if (loading) return <Loading />;

  const { me } = data ? data : {};

  return (
    <>
      <Header />
    </>
  );
};
