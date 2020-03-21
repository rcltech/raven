import React from 'react';
import { Button, Container, FormLabel, makeStyles } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  inputImage: {
    display: 'none'
  }
}));

export const ImagePicker = ({ imageBase64, setImageBase64 }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <input
        accept="image/*"
        className={classes.inputImage}
        id="event-image"
        type="file"
        onChange={({ target: { files } }) => {
          const imageFile = files[0];
          if (!imageFile) return;
          const fReader = new FileReader();
          fReader.readAsDataURL(imageFile);
          fReader.onloadend = ev => setImageBase64(ev.target.result);
        }}
      />
      <FormLabel htmlFor="event-image" className={classes.root}>
        <Button startIcon={<CloudUpload />} fullWidth={true} component="span">
          {imageBase64 ? 'Change image' : 'Upload image'}
        </Button>
      </FormLabel>
    </Container>
  );
};
