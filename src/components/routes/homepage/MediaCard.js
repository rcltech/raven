import React from 'react';
import moment from 'moment';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import {
  Delete,
  FavoriteBorder,
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';

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
  },
  buttonsBar: {
    textAlign: 'right',
    padding: 0
  },
  button: {
    margin: 10
  }
});

export const MediaCard = ({ event, me }) => {
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
        <Container className={classes.buttonsBar}>
          <Box
            className={classes.button}
            style={{ display: me.username === username ? '' : 'none' }}
          >
            <Delete />
          </Box>
          <Box className={classes.button}>
            <FavoriteBorder />
          </Box>
        </Container>
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
