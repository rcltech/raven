import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Tooltip,
  TextField,
  Grid,
  makeStyles
} from '@material-ui/core';
import { AccountCircle, Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    margin: '30%',
    padding: '30%'
  }
});

export const NewEventForm = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Tooltip
        title="Add New Event"
        onClick={() => setOpen(true)}
        placement="right"
      >
        <Fab color="primary" aria-label="add" className={classes.root}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={() => setOpen(false)}>
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
          <Button autoFocus onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
