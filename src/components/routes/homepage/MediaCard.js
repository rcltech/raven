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
    fontFamily: "'Merriweather', serif",
    margin: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer'
    },
    textAlign: 'left'
  },
  buttonsBar: {
    textAlign: 'right',
    padding: theme.spacing(1)
  },
  subscribeButton: {
    backgroundColor: theme.palette.others.main,
    color: '#000',
    borderRadius: 2,
    border: '1px solid #d9d9d9',
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
    paddingTop: '56%'
  }
}));

export const MediaCard = ({ event }) => {
  const [elevation, setElevation] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const classes = useStyles();

  const { title, start, venue, image_url } = event;

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
      <Container className={classes.buttonsBar}>
        <Button
          className={classes.subscribeButton}
          size="small"
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </Button>
      </Container>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.date}>
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
