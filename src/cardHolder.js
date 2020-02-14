import React from 'react';
import './cardHolder.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style = {{ height: 0, paddingTop: '56%'}}
          className={classes.media}
          image={require("./yiruma.jpg")}
          title="Yiruma: Pianist"
        />
        <CardContent>
          <h4>
            Yiruma Live
          </h4>
          <body2>
            Date: DD/MM/YY <br/>
            Venue: HK <br/>
            Contact: ---
          </body2>
        </CardContent>
      </CardActionArea>
      <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        Learn More
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Yiruma's live concert featuring his top hits: River Flows In You, Kiss The Rain, May Be and many more.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
  }