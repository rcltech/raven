import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  }
});

export const Profile = ({ me }) => {
  const classes = useStyles;

  const { username, first_name, last_name, image_url } = me;

  const imageSize = 220;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{ height: imageSize, width: imageSize }}
          component="img"
          src={image_url}
          title="Profile picture"
        />
        <CardContent>
          <Typography variant="h6">{`${first_name} ${last_name}`}</Typography>
          <Typography variant="body1" color="textSecondary">
            {username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
