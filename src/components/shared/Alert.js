import React from 'react';
import { Snackbar, IconButton, Slide } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const TransitionDown = props => <Slide {...props} direction="down" />;

export const Alert = ({ alertDetails: { isOpen, alertContent }, onClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    open={isOpen}
    autoHideDuration={3000}
    onClose={onClose}
    message={alertContent}
    TransitionComponent={TransitionDown}
    action={
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    }
  />
);
