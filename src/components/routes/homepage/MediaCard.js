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
    fontFamily: "'Merriweather', serif"
  },
  media: {
    height: 140,
    fontFamily: "'Merriweather', serif"
  },
  expansionPanel: {
    lineHeight: '0px',
    marginBottom: '0px',
    fontFamily: "'Merriweather', serif"
  }
});

export const MediaCard = ({ event }) => {
  //TODO: add real image instead of using boilerplate image (./yiruma.jpg)
  //      we have to wait for phoenix to be properly set up (base64 -> url convertion and store in S3)
  const classes = useStyles();
  const {
    title,
    start,
    end,
    venue,
    description,
    organiser: { username, email }
  } = event;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{ height: 0, paddingTop: '56%' }}
          className={classes.media}
          image={require('./yiruma.jpg')}
          title="Yiruma: Pianist"
        />
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
