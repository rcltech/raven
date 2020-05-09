import React from 'react';
import QRCode from 'qrcode.react';
import { Container, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: 'grid',
    justifyItems: 'center'
  },
  qrCode: {
    margin: `${theme.spacing(2)}px 0px`,
    borderRadius: 5,
    width: 256,
    height: 256,
    maxWidth: '70vw'
  },
  saveButton: {
    width: 256,
    maxWidth: '70vw'
  }
}));

const downloadQRCode = ({ eventId }) => {
  const img = document.createElement('img');
  const canvas = document.createElement('canvas');

  // Get SVG data and convert it to base64 formst
  const svg = document.getElementById('qr-code');
  const xml = new XMLSerializer().serializeToString(svg);
  const svg64 = 'data:image/svg+xml;base64,' + btoa(xml);

  img.onload = () => {
    canvas.getContext('2d').drawImage(img, 0, 0);
    const link = document.createElement('a');
    link.download = `raven_${eventId}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };
  img.src = svg64;
};

export const ShareEventQRCode = ({ event: { id } }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <QRCode
        value={window.location.href}
        renderAs="svg"
        id="qr-code"
        className={classes.qrCode}
      />
      <Button
        className={classes.saveButton}
        onClick={() => downloadQRCode({ eventId: id })}
      >
        Download QR Code
      </Button>
    </Container>
  );
};
