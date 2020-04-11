import React, { useState } from 'react';
import moment from 'moment';
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import placeholder from '../../../assets/no_image_placeholder.png';
import { useSubscribeMutations } from '../../../custom-hooks';
import { Modal, SubscribersList } from '../../shared';
import { createModalMessage } from '../../../functions';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'min(450px, 90%)',
    margin: theme.spacing(1),
    textAlign: 'left'
  },
  subscribeBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  subscribedButton: {
    color: '#000',
    backgroundColor: theme.palette.others.main,
    '&:hover': {
      backgroundColor: theme.palette.others.dark
    }
  },
  content: {
    margin: 0,
    padding: `0px ${theme.spacing(2)}px`
  },
  date: {
    color: theme.palette.primary.main,
    fontWeight: 500
  },
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 800
  },
  venue: {
    color: '#9e9e9e'
  },
  media: {
    height: 0,
    paddingTop: '60%'
  }
}));

export const MediaCard = ({
  event: { id, title, start, venue, image_url, subscribers },
  isEventSubscribed,
  disableMutation
}) => {
  const [elevation, setElevation] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(isEventSubscribed);
  const [modal, setModal] = useState({
    isOpen: false,
    title: ''
  });

  const {
    methods: { subscribeEvent, unsubscribeEvent },
    loading: { subscribeLoading, unsubscribeLoading },
    error: { subscribeError, unsubscribeError }
  } = useSubscribeMutations();

  const classes = useStyles();

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
    <Card
      className={classes.root}
      elevation={elevation}
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(1)}
    >
      <Modal modalDetails={modal} onClose={() => window.location.reload()} />
      <CardMedia
        className={classes.media}
        image={image_url ? image_url : placeholder}
        title={title}
      />
      <Container className={classes.subscribeBar}>
        <SubscribersList subscribers={subscribers} />
        <Button
          className={isSubscribed ? classes.subscribedButton : ''}
          size="small"
          onClick={() => onSubscribeButtonClicked()}
          disabled={disableMutation}
        >
          {subscribeLoading || unsubscribeLoading
            ? 'Loading'
            : isSubscribed
            ? 'Subscribed'
            : 'Subscribe'}
        </Button>
      </Container>
      <CardContent className={classes.content}>
        <Typography variant="subtitle1" className={classes.date}>
          {`${moment(start).format('lll')}`}
        </Typography>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.venue}>
          {venue}
        </Typography>
      </CardContent>
    </Card>
  );
};
