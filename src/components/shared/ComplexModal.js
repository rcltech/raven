import React from 'react';
import {
  Typography,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'fit-content',
    marginTop: '10%'
  },
  title: {
    color: theme.palette.primary.dark,
    textAlign: 'center',
    borderBottom: '1px solid #e6e6e6'
  },
  content: {
    padding: 0,
    maxHeight: '400px',
    overflowY: 'scroll'
  }
}));

export const ComplexModal = ({
  modalDetails: { isOpen, modalContent },
  onClose
}) => {
  const { title, childComponent } = modalContent;
  const classes = useStyles();

  const titleComponent = <Typography variant="subtitle1">{title}</Typography>;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      className={classes.root}
    >
      <DialogTitle
        children={titleComponent}
        disableTypography
        className={classes.title}
      />
      <DialogContent children={childComponent} className={classes.content} />
    </Dialog>
  );
};
