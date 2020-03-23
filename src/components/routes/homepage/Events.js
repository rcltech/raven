import React, { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { SearchBar } from './SearchBar';
import { filterEvents } from '../../../functions/filterEvents';

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

export const Events = ({ events }) => {
  const [filter, setFilter] = useState('');
  const [sortParam, setSortParam] = useState('');

  const classes = useStyles();

  const filteredEvents = filterEvents({ events, filter, sortParam });

  return (
    <Container className={classes.container}>
      <SearchBar
        setFilter={setFilter}
        sortParam={sortParam}
        setSortParam={setSortParam}
      />
      {filteredEvents.length > 0 ? (
        <Container className={classes.events}>
          {filterEvents({ events, filter, sortParam }).map(event => (
            <MediaCard key={event.id} event={event} />
          ))}
        </Container>
      ) : (
        <Container className={classes.noEvents}>
          <Typography variant="h6">
            Sorry, we couldn't find any results matching "{filter}"
          </Typography>
        </Container>
      )}
    </Container>
  );
};
