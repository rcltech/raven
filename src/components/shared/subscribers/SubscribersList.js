import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { SubscribersDetails } from './SubscribersDetails';
import { SubscribersModal } from './SubscribersModal';

const useStyles = makeStyles(theme => ({
  subscribersCount: {
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
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
        variant="body2"
        className={classes.subscribersCount}
        onClick={() => setModal({ isOpen: true, modalContent })}
      >
        {numberOfSubscribers}{' '}
        {numberOfSubscribers > 1 ? 'subscribers' : 'subscriber'}
      </Typography>
    </>
  );
};
