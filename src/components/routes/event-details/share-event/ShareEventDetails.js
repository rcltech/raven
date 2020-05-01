import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { ShareEventLink } from './ShareEventLink';
import { ShareEventQRCode } from './ShareEventQRCode';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

export const ShareEventDetails = ({ event }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ShareEventLink />
      <ShareEventQRCode event={event} />
    </Container>
  );
};
