import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '350%',
    background: '#142850',
    backgroundSize: 'cover',
    fontFamily: "'Merienda One', cursive",
    padding: '10px',
    color: 'white',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Header = () => {
  const classes = useStyles();
  return <div className={classes.root}>Raven</div>;
};

export default Header;
