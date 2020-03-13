import React from 'react';
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
import { Delete, FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'min(450px, 90%)',
    fontFamily: "'Merriweather', serif",
    margin: 10
  },
  buttonsBar: {
    textAlign: 'right',
    padding: 10
  },
  button: {
    margin: 5,
    border: '1px solid #f2f2f2',
    width: 60,
    height: 60,
    borderRadius: '50%'
  },
  content: {
    margin: 0,
    padding: '0px 15px'
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
  },
  expansionPanel: {
    lineHeight: '0px',
    margin: 10
  }
}));

export const MediaCard = ({ event, me }) => {
  const classes = useStyles();
  const {
    title,
    start,
    venue,
    image_url,
    organiser: { username }
  } = event;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image_url} title={title} />
      <Container className={classes.buttonsBar}>
        <Button
          className={classes.button}
          style={{ display: me.username === username ? '' : 'none' }}
        >
          <Delete fontSize="small" />
        </Button>
        <Button className={classes.button}>
          <FavoriteBorder fontSize="small" />
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
