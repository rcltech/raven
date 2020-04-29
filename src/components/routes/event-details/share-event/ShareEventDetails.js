import React from 'react';
import { Container, makeStyles, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

export const ShareEventDetails = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <OutlinedInput value={`${window.location}`} fullWidth />
    </Container>
  );
};
