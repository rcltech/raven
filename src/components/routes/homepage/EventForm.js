import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { CloudUpload } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: `${theme.spacing(10)}px ${theme.spacing(5)}px`,
    textAlign: 'center'
  },
  input: {
    margin: theme.spacing(2)
  },
  timepickersContainer: {
    margin: theme.spacing(2),
    padding: `${theme.spacing(1)}px 0px`,
    display: 'grid',
    gridTemplateColumns: '45% 10% 45%'
  },
  timepicker: {
    width: '100%'
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: '100%',
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  image: {
    borderRadius: 10,
    borderTopLeftRadius: 0,
    maxWidth: '100%',
    alignSelf: 'center'
  }
}));

export const EventForm = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [imageUrl, setImageUrl] = useState('');

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <FormControl fullWidth className={classes.input}>
        <InputLabel htmlFor="event-title">Event Title</InputLabel>
        <Input id="event-title" />
      </FormControl>
      <FormControl fullWidth className={classes.input}>
        <InputLabel htmlFor="event-venue">Venue</InputLabel>
        <Input id="event-venue" />
      </FormControl>
      <FormControl className={classes.timepickersContainer}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            value={startTime}
            onChange={setStartTime}
            id="event-start"
            className={classes.timepicker}
            animateYearScrolling={true}
          />
        </MuiPickersUtilsProvider>
        <Typography>-</Typography>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            value={endTime}
            onChange={setEndTime}
            id="event-end"
            className={classes.timepicker}
            animateYearScrolling={true}
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <TextField
        fullWidth
        multiline
        label="Description"
        id="event-description"
        className={classes.input}
        variant="outlined"
        rows={6}
      />
      <FormControl fullWidth className={classes.input}>
        <Input
          accept="image/*"
          style={{ display: 'none' }}
          id="event-image"
          type="file"
          onChange={event => {
            const imageFile = event.target.files[0];
            if (!imageFile) return;
            const fReader = new FileReader();
            fReader.readAsDataURL(imageFile);
            fReader.onloadend = ev => setImageUrl(ev.target.result);
          }}
        />
        <InputLabel htmlFor="event-image">
          <Button
            className={classes.button}
            variant="outlined"
            startIcon={<CloudUpload />}
            fullWidth={true}
            component="span"
          >
            {imageUrl === '' ? 'Upload image' : 'Change image'}
          </Button>
        </InputLabel>
        <img
          src={imageUrl}
          className={classes.image}
          style={{ display: imageUrl ? '' : 'none' }}
          alt="event"
        />
      </FormControl>
    </Container>
  );
};
