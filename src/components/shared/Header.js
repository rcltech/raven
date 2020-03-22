import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import placeholder from '../../assets/empty_profile_pic_placeholder.png';

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
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  profile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gridGap: theme.spacing(1),
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    },
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  },
  profilePic: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: '50%'
  },
  profileName: {
    maxWidth: '10vw'
  }
}));

export const Header = ({ me }) => {
  const { first_name, last_name, image_url } = me;
  const classes = useStyles();

  const history = useHistory();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h4"
          className={classes.title}
          onClick={() => history.push('/')}
        >
          Raven
        </Typography>
        <Box className={classes.profile} component={Link} to={'/user'}>
          <img
            src={image_url ? image_url : placeholder}
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
