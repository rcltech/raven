import React, { useState } from 'react';
import { makeStyles, Container, Button } from '@material-ui/core';
import { ShareEvent } from './share-event/ShareEvent';
import { EventOrganiser } from './event-organiser/EventOrganiser';
import { Modal } from '../../shared';
import { useSubscribeMutations } from '../../../custom-hooks';
import { createModalMessage, getSubscriptionStatus } from '../../../functions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0px`,
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '100%'
    }
  },
  buttonsBar: {
    padding: 0
  },
  subscribedButton: {
    color: '#000',
    backgroundColor: theme.palette.others.main,
    '&:hover': {
      backgroundColor: theme.palette.others.dark
    }
  }
}));

export const EventToolbar = ({ event, me: { username } }) => {
  const { id, organiser, subscribers } = event;
  const classes = useStyles();

  const subcriptionStatus = getSubscriptionStatus(subscribers, username);
  const [isSubscribed, setIsSubscribed] = useState(subcriptionStatus);
  const [modal, setModal] = useState({
    isOpen: false,
    title: ''
  });

  const {
    methods: { subscribeEvent, unsubscribeEvent },
    loading: subscribeMutationLoading,
    error: { subscribeError, unsubscribeError }
  } = useSubscribeMutations();

  const onSubscribeButtonClicked = () => {
    if (!isSubscribed)
      subscribeEvent({ variables: { id } })
        .then(({ data }) => setIsSubscribed(true))
        .catch(err => setModal(createModalMessage('error')));
    else
      unsubscribeEvent({ variables: { id } })
        .then(({ data }) => setIsSubscribed(false))
        .catch(err => setModal(createModalMessage('error')));
  };

  if (subscribeError || unsubscribeError)
    console.log({ subscribeError, unsubscribeError });

  return (
    <Container className={classes.root}>
      <Modal modalDetails={modal} onClose={() => window.location.reload()} />
      <EventOrganiser organiser={organiser} />
      <Container className={classes.buttonsBar}>
        <Button
          className={isSubscribed ? classes.subscribedButton : ''}
          fullWidth
          onClick={() => onSubscribeButtonClicked()}
          disabled={subscribeMutationLoading}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
        <ShareEvent event={event} />
      </Container>
    </Container>
  );
};
