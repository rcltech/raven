import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  OutlinedInput,
  Tooltip
} from '@material-ui/core';
import { Assignment as ClipboardIcon } from '@material-ui/icons';
import { Alert as ShareEventAlert } from '../../../shared';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '90% 10%',
    justifyItems: 'center'
  },
  clipboardIcon: {
    height: '100%',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

export const ShareEventLink = () => {
  const defaultAlertContent = {
    isOpen: false,
    alertContent: ''
  };

  const [alert, setAlert] = useState(defaultAlertContent);
  const classes = useStyles();

  const copyEventLinkToClipboard = () => {
    const copyText = document.getElementById('event-link');
    copyText.select();
    document.execCommand('copy');
    setAlert({ isOpen: true, alertContent: 'Copied to clipboard' });
  };

  return (
    <Container className={classes.root}>
      <ShareEventAlert
        alertDetails={alert}
        onClose={() => setAlert(defaultAlertContent)}
      />
      <OutlinedInput value={`${window.location}`} fullWidth id="event-link" />
      <Tooltip title="Copy to clipboard" aria-label="copy">
        <ClipboardIcon
          className={classes.clipboardIcon}
          onClick={() => copyEventLinkToClipboard()}
        />
      </Tooltip>
    </Container>
  );
};
