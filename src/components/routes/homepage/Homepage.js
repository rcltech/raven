import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Events } from './Events';
import { Loading } from '../../shared/Loading';
import { GET_ALL_EVENTS } from '../../../gql/events';
import { EventFormContainer } from './EventFormContainer';

export const Homepage = ({ me }) => {
  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData
  } = useQuery(GET_ALL_EVENTS);

  if (eventsLoading) return <Loading />;

  if (eventsError) console.log(eventsError);

  const { events } = eventsData;

  return (
    <>
      <Events events={events} me={me} />
      <EventFormContainer />
    </>
  );
};
