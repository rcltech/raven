import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDataFetching } from '../../../custom-hooks/useDataFetching';
import { Header } from '../../shared/Header';
import { Profile } from './Profile';
import { EventList } from './EventList';
import { Loading } from '../../shared/Loading';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export const UserProfile = () => {
  const classes = useStyles();

  const { data, loading, error } = useDataFetching();

  if (loading) return <Loading />;
  if (error) console.log(error);

  const { me, events } = data;

  return (
    <>
      <Header />
      <Container className={classes.gridContainer}>
        <Grid container>
          <Grid item xs={12} sm={4} lg={6}>
            <Profile me={me} />
          </Grid>
          <Grid item xs sm lg>
            <EventList events={events} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
