import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles(theme => ({
  timepicker: {
    width: '100%'
  }
}));

export const EventTimePicker = ({ value, setValue }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        value={value}
        onChange={setValue}
        className={classes.timepicker}
        animateYearScrolling={true}
      />
    </MuiPickersUtilsProvider>
  );
};
