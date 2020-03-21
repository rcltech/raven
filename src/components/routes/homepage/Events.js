import React, { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Container, OutlinedInput, makeStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%'
  },
  searchBar: {
    margin: theme.spacing(2),
    width: 'max(30%, 200px)',
    color: theme.palette.primary.main
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
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <OutlinedInput
        className={classes.searchBar}
        placeholder="Search event(s)"
        endAdornment={<SearchIcon color="inherit" />}
        onChange={({ target: { value } }) => setFilter(value)}
      />
      <Container className={classes.events}>
        {events
          .filter(
            ({ title, venue }) =>
              title.toLowerCase().includes(filter) ||
              venue.toLowerCase().includes(filter)
          )
          .map(event => (
            <MediaCard key={event.id} event={event} />
          ))}
      </Container>
    </Container>
  );
};
