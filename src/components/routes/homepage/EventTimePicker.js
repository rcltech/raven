import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles(theme => ({
  timepicker: {
    width: '100%'
  }
}));

export const EventTimePicker = ({ id }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        id={id}
        className={classes.timepicker}
        animateYearScrolling={true}
      />
    </MuiPickersUtilsProvider>
  );
};
