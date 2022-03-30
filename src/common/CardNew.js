import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard({
  image,
  product_name,
  price,
  description,
  buy,
  handleClick,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={handleClick}
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h5" component="h2">
                {product_name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid item xs={5}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          {buy}
        </Button>
      </CardActions>
    </Card>
  );
}
