import React, { useState } from 'react';
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
  const [isImageUploaded, setImageUploaded] = useState(false);
  const classes = useStyles();

  const handleOnImageInputChange = files => {
    const imageFile = files[0];
    if (!imageFile) return;
    const fReader = new FileReader();
    fReader.readAsDataURL(imageFile);
    fReader.onloadend = ev => setImageBase64(ev.target.result);
    if (!isImageUploaded) setImageUploaded(true);
  };

  return (
    <Container className={classes.root}>
      <input
        accept="image/*"
        className={classes.inputImage}
        id="event-image"
        type="file"
        onChange={({ target: { files } }) => handleOnImageInputChange(files)}
      />
      <FormLabel htmlFor="event-image" className={classes.root}>
        <Button startIcon={<CloudUpload />} fullWidth={true} component="span">
          {isImageUploaded ? 'Change Image' : 'Upload Image'}
        </Button>
      </FormLabel>
    </Container>
  );
};
