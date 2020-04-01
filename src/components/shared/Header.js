import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    color: '#fff',
    textDecoration: 'none'
  },
  profilePic: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: theme.spacing(0.5),
    '&:hover': {
      position: 'relative',
      top: '-2px'
    }
  }
}));

export const Header = ({ me: { image_url } }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box component={Link} to={'/'} className={classes.title}>
          <Typography variant="h4">Raven</Typography>
        </Box>
        <Box component={Link} to={'/user'}>
          <img
            src={image_url ? image_url : placeholder}
            className={classes.profilePic}
            alt="user-profile"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
