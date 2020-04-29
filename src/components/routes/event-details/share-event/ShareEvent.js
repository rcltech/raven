import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { ShareEventDetails } from './ShareEventDetails';
import { ComplexModal as ShareEventModal } from '../../../shared';

const useStyles = makeStyles(theme => ({
  shareButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.primary.light}`,
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary.light
    }
  }
}));

export const ShareEvent = () => {
  const classes = useStyles();
  const defaultModalContent = { title: '', childComponent: <></> };

  const [modal, setModal] = useState({
    isOpen: false,
    modalContent: defaultModalContent
  });

  const shareEventModalContent = <ShareEventDetails />;
  const modalContent = {
    title: 'Share event',
    childComponent: shareEventModalContent
  };

  return (
    <>
      <ShareEventModal
        modalDetails={modal}
        onClose={() =>
          setModal({ isOpen: false, modalContent: defaultModalContent })
        }
      />
      <Button
        fullWidth
        className={classes.shareButton}
        onClick={() => setModal({ isOpen: true, modalContent })}
      >
        Share
      </Button>
    </>
  );
};
