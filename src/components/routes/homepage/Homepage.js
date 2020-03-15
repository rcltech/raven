import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Events } from './Events';
import { Loading } from '../../shared/Loading';
import { GET_ALL_EVENTS } from '../../../gql/events';
import { GET_ME } from '../../../gql/users';
import { redirectToLogin } from '../../../functions/redirectToLogin';
import { EventFormContainer } from './EventFormContainer';

export const Homepage = () => {
  const { loading: meLoading, error: meError, data: userData } = useQuery(
    GET_ME
  );

  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData
  } = useQuery(GET_ALL_EVENTS);

  if (meLoading || eventsLoading) {
    return <Loading />;
  }

  if (meError) console.log(meError);
  if (eventsError) console.log(eventsError);

  if (!userData || !userData.me) {
    return redirectToLogin();
  }

  const { events } = eventsData;

  return (
    <>
      <Events events={events} me={userData.me} />
      <EventFormContainer />
    </>
  );
};
