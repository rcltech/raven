import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '30%',
    padding: '30%'
  }
});

export default function NewEventForm() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title="Add New Event"
        onClick={handleClickOpen}
        placement="right"
      >
        <Fab color="primary" aria-label="add" className={classes.root}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <center>
          <DialogTitle>Event Details</DialogTitle>
        </center>
        <DialogContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>

          <br />
          <TextField
            id="outlined-search"
            label="Event Name"
            type="Event Name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-search"
            defaultValue=""
            type="Date"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-search"
            label="Venue"
            type="Venue"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="4"
            defaultValue=""
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
