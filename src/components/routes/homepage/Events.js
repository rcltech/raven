import React, { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { SearchBar } from './SearchBar';
import { filterEvents, sortEvents } from '../../../functions';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%'
  },
  events: {
    padding: theme.spacing(1),
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)'
    }
  },
  noEvents: {
    color: theme.palette.error.light,
    padding: theme.spacing(2)
  }
}));

const getSubscribedStatus = (subscribers, username) => {
  return subscribers.map(({ username }) => username).includes(username);
};

export const Events = ({ events, me: { username } }) => {
  const [filter, setFilter] = useState('');
  const [sortParam, setSortParam] = useState('Date');

  const classes = useStyles();

  const filteredEvents = filterEvents({ events, filter });
  sortEvents({ events: filteredEvents, sortParam });

  return (
    <Container className={classes.container}>
      <SearchBar
        setFilter={setFilter}
        sortParam={sortParam}
        setSortParam={setSortParam}
      />
      {filteredEvents.length === 0 && filter ? (
        <Container className={classes.noEvents}>
          <Typography variant="h6">
            Sorry, we couldn't find any results matching "{filter}"
          </Typography>
        </Container>
      ) : (
        <Container className={classes.events}>
          {filteredEvents.map(event => {
            const { id, subscribers } = event;
            return (
              <MediaCard
                key={id}
                event={event}
                isEventSubscribed={getSubscribedStatus(subscribers, username)}
                disableMutation={false}
              />
            );
          })}
        </Container>
      )}
    </Container>
  );
};
