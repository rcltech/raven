import React from 'react';
import {
  Typography,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark
  },
  content: {
    padding: 0,
    maxHeight: '400px'
  }
}));

export const SubscribersModal = ({
  modalDetails: { isOpen, modalContent },
  onClose
}) => {
  const { title, childComponent } = modalContent;
  const classes = useStyles();

  const titleComponent = (
    <Typography variant="subtitle1" className={classes.title}>
      {title}
    </Typography>
  );

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle children={titleComponent} disableTypography />
      <DialogContent children={childComponent} className={classes.content} />
    </Dialog>
  );
};
