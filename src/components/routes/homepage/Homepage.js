import React from 'react';
import { Events } from './Events';
import { Loading } from '../../shared/Loading';
import { EventFormContainer } from './EventFormContainer';
import { useDataFetching } from '../../../custom-hooks';

export const Homepage = () => {
  const { data, loading, error } = useDataFetching();

  if (loading) return <Loading />;
  if (error) console.log(error);

  const { events, me } = data;

  return (
    <>
      <Events events={events} me={me} />
      <EventFormContainer />
    </>
  );
};
