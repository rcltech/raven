import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  CardMedia
} from '@material-ui/core';
import { getTimeDescription } from '../../../functions';
import placeholder from '../../../assets/no_image_placeholder.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    maxHeight: 500,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '100%',
      maxHeight: 'none'
    }
  },
  media: {
    width: '100%',
    paddingTop: '60%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  eventDetails: {
    maxHeight: 500,
    overflowY: 'scroll',
    padding: `min(10%, ${theme.spacing(4)}px)`
  },
  descriptionDetails: {
    margin: `${theme.spacing(2)}px 0px`
  }
}));

export const EventDescription = ({
  event: { title, image_url, subscribers, start, end, description }
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url ? image_url : placeholder}
        title={title}
        onClick={() => window.open(image_url, '_blank')}
      />
      <Container className={classes.eventDetails}>
        <Typography variant="h4" className={classes.descriptionDetails}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.descriptionDetails}>
          {getTimeDescription({ start, end })}
        </Typography>
        <Typography variant="body1" className={classes.descriptionDetails}>
          {description}
        </Typography>
      </Container>
    </Container>
  );
};
