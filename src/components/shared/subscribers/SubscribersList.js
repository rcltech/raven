import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { ThumbUpAltRounded as ThumbUpIcon } from '@material-ui/icons';
import { SubscribersDetails } from './SubscribersDetails';
import { ComplexModal as SubscribersModal } from '../';

const useStyles = makeStyles(theme => ({
  subscribersCount: {
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

export const SubscribersList = ({ subscribers = [] }) => {
  const numberOfSubscribers = subscribers.length;
  const defaultModalContent = { title: '', childComponent: <></> };

  const [modal, setModal] = useState({
    isOpen: false,
    modalContent: defaultModalContent
  });

  const classes = useStyles();

  const subscribersModalTitle = `${numberOfSubscribers} people subscribed to this event`;
  const subscribersModalContent = (
    <SubscribersDetails subscribers={subscribers} />
  );

  const modalContent = {
    title: subscribersModalTitle,
    childComponent: subscribersModalContent
  };

  return (
    <>
      <SubscribersModal
        modalDetails={modal}
        onClose={() =>
          setModal({ isOpen: false, modalContent: defaultModalContent })
        }
      />
      <Typography
        variant="body1"
        className={classes.subscribersCount}
        onClick={() => setModal({ isOpen: true, modalContent })}
      >
        {numberOfSubscribers} <ThumbUpIcon fontSize="inherit" />
      </Typography>
    </>
  );
};
