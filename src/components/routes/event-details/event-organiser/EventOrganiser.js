import React, { useState } from 'react';
import {
  Container,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { EventOrganiserInfo } from './EventOrganiserInfo';
import { ComplexModal as EventOrganiserModal } from '../../../shared';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: `${theme.spacing(1)}px 0px`,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: '#9e9e9e'
  },
  organiser: {
    padding: `${theme.spacing(1)}px 0px`,
    width: 'fit-content'
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  displayName: {
    color: theme.palette.primary.dark,
    fontWeight: 300,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

export const EventOrganiser = ({
  organiser: { first_name, last_name, username, image_url, email, phone }
}) => {
  const classes = useStyles();

  const defaultModalContent = { title: '', childComponent: <></> };
  const [modal, setModal] = useState({
    isOpen: false,
    modalContent: defaultModalContent
  });

  const displayName = `${first_name} ${last_name}`;
  const modalContent = {
    title: 'Organiser info',
    childComponent: <EventOrganiserInfo organiserInfo={{ email, phone }} />
  };

  const openModal = () => setModal({ isOpen: true, modalContent });

  return (
    <Container className={classes.root}>
      <EventOrganiserModal
        modalDetails={modal}
        onClose={() =>
          setModal({ isOpen: false, modalContent: defaultModalContent })
        }
      />
      <Typography variant="h6" className={classes.title}>
        organised by
      </Typography>
      <ListItem className={classes.organiser}>
        <ListItemAvatar>
          <Avatar
            alt={username}
            src={image_url}
            onClick={openModal}
            className={classes.avatar}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography
            variant="subtitle1"
            className={classes.displayName}
            onClick={openModal}
          >
            {displayName}
          </Typography>
        </ListItemText>
      </ListItem>
    </Container>
  );
};
