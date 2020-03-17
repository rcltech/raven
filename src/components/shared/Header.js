import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3)
    }
  },
  title: {
    flexGrow: 1,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  profile: {
    width: 'min-content',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gridGap: theme.spacing(1),
    alignItems: 'center'
  },
  profilePic: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: '50%'
  },
  profileName: {
    maxWidth: '10vw',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}));

export const Header = ({ me }) => {
  const { first_name, last_name, image_url } = me;
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography
          variant="h4"
          className={classes.title}
          onClick={() => window.location.replace('/')}
        >
          Raven
        </Typography>
        <Box className={classes.profile}>
          <img
            src={image_url}
            className={classes.profilePic}
            alt="user-profile"
          />
          <Typography variant="body1" className={classes.profileName}>
            {`${first_name} ${last_name}`}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
