import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles(theme => ({
  timePicker: {
    width: '100%'
  }
}));

export const EventTimePicker = ({ value, handleTimeChange }) => {
  const classes = useStyles();

  const theme = useTheme();
  const { overrides } = theme;
  const timePickerTheme = {
    ...theme,
    overrides: { ...overrides, MuiButton: {} }
  }; // removes MuiButton override styling

  return (
    <ThemeProvider theme={timePickerTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          value={value}
          onChange={newValue => handleTimeChange(newValue)}
          className={classes.timePicker}
          animateYearScrolling={true}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
