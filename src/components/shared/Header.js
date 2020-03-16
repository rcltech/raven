import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3)
    }
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  title: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  profile: {
    display: 'grid'
  },
  profileName: {
    justifySelf: 'end',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}));

export const Header = ({ me }) => {
  const { first_name, last_name } = me;
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h4"
          className={classes.title}
          onClick={() => window.location.replace('/')}
        >
          Raven
        </Typography>
        <Container className={classes.profile}>
          <Typography variant="body1" className={classes.profileName}>
            {`${first_name} ${last_name}`}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
