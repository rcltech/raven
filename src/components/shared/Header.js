import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '350%',
    background: theme.palette.primary.dark,
    backgroundSize: 'cover',
    fontFamily: "'Merienda One', cursive",
    padding: '10px',
    color: 'white',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const Header = () => {
  const classes = useStyles();
  return <div className={classes.root}>Raven</div>;
};
