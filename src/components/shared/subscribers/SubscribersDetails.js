import React from 'react';
import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  displayName: {
    color: theme.palette.primary.dark,
    fontWeight: 300
  }
}));

const SubscriberDetails = ({
  subscriberDetails: { username, first_name, last_name, image_url }
}) => {
  const displayName = `${first_name} ${last_name}`;
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={username} src={image_url} />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="subtitle1" className={classes.displayName}>
          {displayName}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export const SubscribersDetails = ({ subscribers }) => {
  return (
    <List>
      {subscribers.map((subscriber, index) => (
        <SubscriberDetails key={index} subscriberDetails={subscriber} />
      ))}
    </List>
  );
};
