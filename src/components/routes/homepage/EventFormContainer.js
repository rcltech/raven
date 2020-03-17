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
import { EventForm } from './EventForm';
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
  },
  margin: {
    margin: theme.spacing(2)
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EventFormContainer = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
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
        <EventForm />
      </Dialog>
    </>
  );
};
