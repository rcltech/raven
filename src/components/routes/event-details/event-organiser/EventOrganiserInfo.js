import React, { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  Input,
  makeStyles
} from '@material-ui/core';
import { Email as EmailIcon, Phone as PhoneIcon } from '@material-ui/icons';
import { Alert } from '../../../shared';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  iconItem: {
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer'
    }
  },
  inputItem: {
    color: theme.palette.primary.dark
  }
}));

export const EventOrganiserInfo = ({ organiserInfo: { email, phone } }) => {
  const defaultAlertContent = {
    isOpen: false,
    alertContent: ''
  };

  const [alert, setAlert] = useState(defaultAlertContent);
  const classes = useStyles();

  const copyPhoneNumberToClipboard = () => {
    const copyText = document.getElementById('phone-number');
    copyText.select();
    document.execCommand('copy');
    setAlert({ isOpen: true, alertContent: 'Copied to clipboard' });
  };

  const onEmailClick = () => (window.location = `mailto:${email}`);
  const onPhoneClick = () => copyPhoneNumberToClipboard();
  const listItems = [
    {
      id: 'email-address',
      icon: <EmailIcon />,
      text: email,
      onClick: onEmailClick
    },
    {
      id: 'phone-number',
      icon: <PhoneIcon />,
      text: phone,
      onClick: onPhoneClick
    }
  ];

  return (
    <Container className={classes.root}>
      <Alert
        alertDetails={alert}
        onClose={() => setAlert(defaultAlertContent)}
      />
      <List component="nav">
        {listItems.map(({ id, icon, text, onClick }, index) => (
          <ListItem key={index}>
            <ListItemIcon className={classes.iconItem} onClick={onClick}>
              {icon}
            </ListItemIcon>
            <Input
              className={classes.inputItem}
              id={id}
              value={text}
              fullWidth
              disableUnderline
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
