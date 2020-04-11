import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDataFetching } from '../../../custom-hooks';
import { Profile } from './Profile';
import { EventList } from './EventList';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_EVENT, GET_ALL_EVENTS } from '../../../gql/events';
import { Modal, Loading } from '../../shared';
import { createModalMessage, selectUserEvents } from '../../../functions';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export const UserProfile = () => {
  const classes = useStyles();
  const [modal, setModal] = useState({
    isOpen: false,
    title: ''
  });

  const { data, loading: dataLoading, error: dataError } = useDataFetching();

  const [
    doDeleteEvent,
    { loading: deleteLoading, error: deleteError }
  ] = useMutation(DELETE_EVENT, {
    refetchQueries: [{ query: GET_ALL_EVENTS }]
  });

  if (dataLoading || deleteLoading) return <Loading />;
  if (dataError) console.log(dataError);
  if (deleteError) console.log(deleteError);

  const { me, events } = data;

  const userEvents = selectUserEvents(events, me.username);

  const onDelete = id => {
    doDeleteEvent({ variables: { id } })
      .then(({ data: { deleteEvent: deleteEventResponse } }) => {
        setModal(
          createModalMessage(
            deleteEventResponse ? 'delete-event-success' : 'error'
          )
        );
      })
      .catch(err => {
        setModal(createModalMessage('error'));
      });
  };

  return (
    <>
      <Modal
        modalDetails={modal}
        onClose={() => {
          setModal({ isOpen: false, title: '' });
        }}
      />
      <Container className={classes.gridContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} lg={6}>
            <Profile me={me} />
          </Grid>
          <Grid item xs sm lg>
            <EventList events={userEvents} onDelete={onDelete} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
