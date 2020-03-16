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
import { CloudUpload } from '@material-ui/icons';
import { EventTimePicker } from './EventTimePicker';

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
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: '100%',
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  inputImage: {
    display: 'none'
  },
  image: {
    borderRadius: 5,
    borderTopLeftRadius: 0,
    maxWidth: '100%'
  }
}));

export const EventForm = () => {
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
        <EventTimePicker id="event-start" />
        <Typography>-</Typography>
        <EventTimePicker id="event-end" />
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
          className={classes.inputImage}
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
            {imageUrl ? 'Change image' : 'Upload image'}
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
