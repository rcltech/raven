import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Loader from 'react-loader-spinner';

const size = 80;

const useStyles = makeStyles({
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    margin: `-${size / 2}px 0px 0px -${size / 2}px`
  }
});

export const Loading = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Loader
      className={classes.loading}
      type="Watch"
      color={theme.palette.primary.main}
      height={size}
      width={size}
    />
  );
};
