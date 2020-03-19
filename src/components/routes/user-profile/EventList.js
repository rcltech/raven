import React from 'react';
import moment from 'moment';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  heading: {
    margin: theme.spacing(0.8)
  },
  paper: {
    width: '100%',
    maxWidth: 600,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}));

export const EventList = ({ events }) => {
  const classes = useStyles();

  console.log(events);

  const displayDateTime = (start, end) => {
    return `${moment(start).format('D/MM h:mm')} to ${moment(end).format(
      'h:mm a'
    )}`;
  };

  const handleDelete = id => {
    alert(`to delete event with id: ${id}`);
  };

  return (
    <>
      <div className={classes.heading}>
        <Typography variant="h5">Upcoming Events</Typography>
      </div>

      <List>
        {events.map(({ id, title, start, end }, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={title}
              secondary={displayDateTime(start, end)}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};
