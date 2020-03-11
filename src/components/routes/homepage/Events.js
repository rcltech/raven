import React from 'react';
import { MediaCard } from './MediaCard';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 5,
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

const Events = ({ events, me }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {events.map(event => (
        <MediaCard key={event.id} event={event} me={me} />
      ))}
    </Container>
  );
};

export { Events };
