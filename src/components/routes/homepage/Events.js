import React, { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Container, makeStyles } from '@material-ui/core';
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
  }
}));

export const Events = ({ events }) => {
  const [filter, setFilter] = useState('');
  const [sortParam, setSortParam] = useState('');

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <SearchBar
        setFilter={setFilter}
        sortParam={sortParam}
        setSortParam={setSortParam}
      />
      <Container className={classes.events}>
        {filterEvents({ events, filter, sortParam }).map(event => (
          <MediaCard key={event.id} event={event} />
        ))}
      </Container>
    </Container>
  );
};
