import React from 'react';
import moment from 'moment';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: '10px',
    fontFamily: "'Merriweather', serif",
    margin: 10
  },
  media: {
    fontFamily: "'Merriweather', serif",
    height: 0,
    paddingTop: '56%'
  },
  expansionPanel: {
    lineHeight: '0px',
    marginBottom: '0px',
    fontFamily: "'Merriweather', serif"
  }
});

export const MediaCard = ({ event }) => {
  const classes = useStyles();
  const {
    title,
    start,
    end,
    venue,
    description,
    image_url,
    organiser: { username, email }
  } = event;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image_url} title={title} />
        <CardContent className={classes.root}>
          <h4>{title}</h4>
          <Typography variant={'body2'}>
            Date:{' '}
            {`${moment(start).format('lll')} - ${moment(end).format('lll')}`}{' '}
            <br />
            Venue: {venue} <br />
            Contact: {`${username} (${email})`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Learn More
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
};
