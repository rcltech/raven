import React from 'react';
import { Container, makeStyles, Card } from '@material-ui/core';
import { EventDescription } from './EventDescription';
import { EventToolbar } from './EventToolbar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    width: '100%'
  },
  card: {
    width: '100%'
  }
}));

export const EventDetail = ({ event, me }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <EventDescription event={event} />
      </Card>
      <EventToolbar event={event} me={me} />
    </Container>
  );
};
