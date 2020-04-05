import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { theme } from '../../../theme';

const useStyles = makeStyles(theme => ({
  timepicker: {
    width: '100%'
  }
}));

export const EventTimePicker = ({ value, handleTimeChange }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={{ ...theme, overrides: {} }}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          value={value}
          onChange={newValue => handleTimeChange(newValue)}
          className={classes.timepicker}
          animateYearScrolling={true}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
