import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EventDetail } from './EventDetail';
import { Loading } from '../../shared';
import { useDataFetching } from '../../../custom-hooks';

export const EventDetails = () => {
  const { data, loading, error } = useDataFetching();

  if (loading) return <Loading />;
  if (error) console.log(error);

  const { events, me } = data;

  return (
    <Switch>
      {events.map(event => {
        const { id } = event;
        return (
          <Route
            exact
            path={`/event/${id}`}
            key={id}
            component={() => <EventDetail event={event} me={me} />}
          />
        );
      })}
    </Switch>
  );
};
