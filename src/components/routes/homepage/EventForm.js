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
import { Modal } from './Modal';
import { validateEvent } from '../../../functions/validateEvent';
import imagePlaceholder from '../../../assets/no_image_placeholder.png';

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
  submitButton: {
    margin: theme.spacing(5),
    gridColumn: '1 / span 2',
    justifySelf: 'center'
  }
}));

export const EventForm = ({ onFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const [imageBase64, setImageBase64] = useState(imagePlaceholder);
  const [modal, setModal] = useState({
    isOpen: false,
    title: ''
  });

  const classes = useStyles();

  const event = {
    title,
    start,
    end,
    venue,
    image_base64: imageBase64,
    description
  };

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Modal
        modalDetails={modal}
        onClose={() => setModal({ isOpen: false, title: '' })}
      />
      <Container>
        <FormControl fullWidth required className={classes.input}>
          <InputLabel>Event Title</InputLabel>
          <Input onChange={({ target: { value } }) => setTitle(value)} />
        </FormControl>
        <FormControl fullWidth required className={classes.input}>
          <InputLabel>Venue</InputLabel>
          <Input onChange={({ target: { value } }) => setVenue(value)} />
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
        <MediaCard event={{ ...event, image_url: imageBase64 }} />
      </Container>

      <Button
        className={classes.submitButton}
        onClick={() => {
          const { isEventValid, message } = validateEvent(event);
          if (!isEventValid) setModal({ isOpen: true, title: message });
          else onFormSubmit(event);
        }}
      >
        Submit event
      </Button>
    </Container>
  );
};
