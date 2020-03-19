import React, { forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
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

export const CreateEventModal = ({
  modalDetails: { isOpen, title },
  onClose
}) => {
  const classes = useStyles();

  return (
    <>
      <Dialog open={isOpen} TransitionComponent={Transition} onClose={onClose}>
        <DialogTitle className={classes.title}>{title}</DialogTitle>
        <DialogActions>
          <Button onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
