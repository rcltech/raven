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
import { EventTimePicker } from './EventTimePicker';
import { ImagePicker } from './ImagePicker';
import { MediaCard } from './MediaCard';

const useStyles = makeStyles(theme => ({
  formContainer: {
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down(800)]: {
      minHeight: 'max-content',
      display: 'unset'
    }
  },
  input: {
    margin: `${theme.spacing(2)}px 0px`
  },
  timepickersContainer: {
    margin: theme.spacing(2),
    padding: `${theme.spacing(1)}px 0px`,
    display: 'grid',
    gridTemplateColumns: '45% 10% 45%'
  },
  image: {
    borderRadius: 5,
    borderTopLeftRadius: 0,
    maxWidth: '100%'
  },
  submitButton: {
    margin: theme.spacing(5),
    gridColumn: '1 / span 2',
    justifySelf: 'center',
    color: '#fff',
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

export const EventForm = () => {
  const [title, setTitle] = useState('Event Title');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [venue, setVenue] = useState('Event Venue');
  const [description, setDescription] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const classes = useStyles();
  const event = {
    title,
    start,
    end,
    venue,
    image_url: imageBase64,
    description
  };

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Container>
        <FormControl fullWidth required className={classes.input}>
          <InputLabel>Event Title</InputLabel>
          <Input
            onChange={({ target: { value } }) =>
              setTitle(value === '' ? 'Event Title' : value)
            }
          />
        </FormControl>
        <FormControl fullWidth required className={classes.input}>
          <InputLabel>Venue</InputLabel>
          <Input
            onChange={({ target: { value } }) =>
              setVenue(value === '' ? 'Event Venue' : value)
            }
          />
        </FormControl>
        <FormControl className={classes.timepickersContainer}>
          <EventTimePicker value={start} setValue={setStart} />
          <Typography>-</Typography>
          <EventTimePicker value={end} setValue={setEnd} />
        </FormControl>
        <TextField
          label="Description"
          value={description}
          fullWidth
          multiline
          className={classes.input}
          variant="outlined"
          rows={6}
          onChange={({ target: { value } }) => setDescription(value)}
        />
        <FormControl fullWidth className={classes.input}>
          <ImagePicker
            imageBase64={imageBase64}
            setImageBase64={setImageBase64}
          />
        </FormControl>
      </Container>

      <Container>
        <Typography variant="h6" color="inherit">
          Your event card preview
        </Typography>
        <MediaCard event={event} />
      </Container>

      <Button className={classes.submitButton}>Submit event</Button>
    </Container>
  );
};
