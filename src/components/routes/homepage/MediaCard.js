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

const useStyles = makeStyles(theme => ({
  root: {
    width: 'min(450px, 90%)',
    margin: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer'
    },
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
      backgroundColor: theme.palette.others.main
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
    paddingTop: '56%'
  }
}));

const SubscribersList = ({ subscribers = [] }) => {
  const numberOfSubscribers = subscribers.length;
  return (
    <Typography variant="body2">
      {numberOfSubscribers}{' '}
      {numberOfSubscribers > 1 ? 'subscribers' : 'subscriber'}
    </Typography>
  );
};

export const MediaCard = ({
  event: { title, start, venue, image_url, subscribers, isEventSubscribed }
}) => {
  const [elevation, setElevation] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(isEventSubscribed);

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      elevation={elevation}
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(1)}
    >
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
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
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
