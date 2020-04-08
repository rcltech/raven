import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import placeholder from '../../../assets/empty_profile_pic_placeholder.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    textAlign: 'left'
  },
  media: {
    height: 200,
    width: 220
  }
});

export const Profile = ({ me }) => {
  const classes = useStyles();

  const { username, first_name, last_name, image_url } = me;

  // Get better quality version of google profile image
  // Please refer to https://github.com/rcltech/phoenix for more details
  const highResolutionImageURL = `${image_url}?sz=500`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image_url ? highResolutionImageURL : placeholder}
          title={'Profile picture'}
        />
        <CardContent>
          <Typography variant="body1">{`${first_name} ${last_name}`}</Typography>
          <Typography variant="body2" color="textSecondary">
            {username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
