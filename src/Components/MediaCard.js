import React from 'react';

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

export default function MediaCard() {
  const classes = useStyles();

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
          <h4>Yiruma Live</h4>
          <Typography variant={'body2'}>
            Date: DD/MM/YY <br />
            Venue: HK <br />
            Contact: ---
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
          <Typography>
            Yiruma's live concert featuring his top hits: River Flows In You,
            Kiss The Rain, May Be and many more.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
}
