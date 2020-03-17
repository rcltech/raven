import React, { useState } from 'react';
import {
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
    padding: `${theme.spacing(10)}px 0px`,
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down(800)]: {
      display: 'block'
    }
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
  image: {
    borderRadius: 5,
    borderTopLeftRadius: 0,
    maxWidth: '100%'
  }
}));

export const EventForm = () => {
  const [title, setTitle] = useState('Event Title');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [venue, setVenue] = useState('Event Venue');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const classes = useStyles();
  const event = { title, start, venue, image_url: imageUrl };

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Container>
        <FormControl fullWidth className={classes.input}>
          <InputLabel>Event Title</InputLabel>
          <Input
            onChange={({ target: { value } }) =>
              setTitle(value === '' ? 'Event Title' : value)
            }
          />
        </FormControl>
        <FormControl fullWidth className={classes.input}>
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
          onChange={ev => setDescription(ev.target.value)}
        />
        <FormControl fullWidth className={classes.input}>
          <ImagePicker imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </FormControl>
      </Container>

      <Container>
        <Typography variant="h6" color="inherit">
          Your event card preview
        </Typography>
        <MediaCard event={event} />
      </Container>
    </Container>
  );
};
