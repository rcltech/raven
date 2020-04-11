import React, { useState, forwardRef } from 'react';
import {
  AppBar,
  Dialog,
  Fab,
  IconButton,
  Tooltip,
  Toolbar,
  Typography,
  Slide,
  makeStyles
} from '@material-ui/core';
import { Add as AddIcon, Close as CloseIcon } from '@material-ui/icons';
import { useMutation } from '@apollo/react-hooks';
import { GET_ALL_EVENTS, CREATE_EVENT } from '../../../../gql/events';
import { EventForm } from './EventForm';
import { Modal, Loading } from '../../../shared';
import { createModalMessage } from '../../../../functions/createModalMessage';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  appBar: {
    backgroundColor: theme.palette.primary.main
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EventFormContainer = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: ''
  });

  const classes = useStyles();

  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT, {
    refetchQueries: [{ query: GET_ALL_EVENTS }]
  });

  if (error) {
    console.log(error);
  }

  const doCreateEvent = ({
    title,
    venue,
    start,
    end,
    description,
    image_base64
  }) => {
    createEvent({
      variables: {
        title,
        venue,
        start: new Date(start).toISOString(),
        end: new Date(end).toISOString(),
        description,
        image_base64
      }
    })
      .then(({ data: { createEvent: createEventResponse } }) => {
        setModal(
          createModalMessage(
            createEventResponse ? 'create-event-success' : 'error'
          )
        );
      })
      .catch(err => {
        setModal(createModalMessage('error'));
      });
  };

  return (
    <>
      <Modal
        modalDetails={modal}
        onClose={() => {
          setModal({ isOpen: false, title: '' });
          setOpen(false);
        }}
      />
      <Tooltip
        title="Add New Event"
        onClick={() => setOpen(true)}
        placement="right"
      >
        <Fab color="primary" aria-label="add" className={classes.root}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Event Details
            </Typography>
          </Toolbar>
        </AppBar>
        <EventForm onFormSubmit={event => doCreateEvent(event)} />
        {loading ? <Loading /> : <></>}
      </Dialog>
    </>
  );
};
