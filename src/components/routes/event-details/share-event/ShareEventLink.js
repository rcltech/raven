import React from 'react';
import {
  Container,
  makeStyles,
  OutlinedInput,
  Tooltip
} from '@material-ui/core';
import { Assignment as ClipboardIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '90% 10%',
    justifyItems: 'center'
  },
  clipboardIcon: {
    height: '100%',
    color: theme.palette.primary.dark,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

const copyEventLinkToClipboard = () => {
  const copyText = document.getElementById('event-link');
  copyText.select();
  document.execCommand('copy');
};

export const ShareEventLink = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <OutlinedInput value={`${window.location}`} fullWidth id="event-link" />
      <Tooltip title="Copy link to clipboard" aria-label="copy">
        <ClipboardIcon
          className={classes.clipboardIcon}
          onClick={() => copyEventLinkToClipboard()}
        />
      </Tooltip>
    </Container>
  );
};
