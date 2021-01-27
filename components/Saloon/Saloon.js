import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:4
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: "300px",
    paddingTop: '56.25%', // 16:9
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Saloon = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Passions
          </Typography>
         <Rating value={5} readOnly/>
        </CardContent>
        <Button>Book now</Button>
      </div>
      <CardMedia
        className={classes.cover}
        image="/hairstyles-dummy-head-hair-salon-fashion-hairstyles-dummy-head-hair-salon-133316108.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}

export default Saloon;