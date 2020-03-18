import React, { forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateEventModal = ({ createEventResponse, onClose }) => {
  const { title, description, isOpen } = createEventResponse;
  const classes = useStyles();

  return (
    <>
      <Dialog open={isOpen} TransitionComponent={Transition} onClose={onClose}>
        <DialogTitle className={classes.title}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
