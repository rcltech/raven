import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { ShareEventLink } from './ShareEventLink';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

export const ShareEventDetails = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ShareEventLink />
    </Container>
  );
};
