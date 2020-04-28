import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loading } from '../../shared';
import { useDataFetching } from '../../../custom-hooks';

export const EventDetails = () => {
  const { data, loading, error } = useDataFetching();

  if (loading) return <Loading />;
  if (error) console.log(error);

  const { events } = data;

  return (
    <>
      <Switch>
        {events.map(event => (
          <Route
            exact
            path={`/event/${event.id}`}
            key={event.id}
            component={() => <div>{JSON.stringify(event)}</div>}
          />
        ))}
      </Switch>
    </>
  );
};
