import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sx={8}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {/* be{bull}nev{bull}o{bull}lent */}
              Product Name
            </Typography>
            <br />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Quantity: 2
            </Typography>
            <br />
            <Typography className={classes.pos} color="textSecondary">
              Category:(Footwear)
            </Typography>

            <Typography variant="body2" component="p">
              Description:******
              <br />
              {/* {'"a benevolent smile"'} */}
            </Typography>
            <br />
            <Typography className={classes.pos} color="textSecondary">
              Total Price: RS 1000
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sx={4}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {/* be{bull}nev{bull}o{bull}lent */}
              Address Details
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              City
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Contact Number
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Street
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              State
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ZIP-CODE
            </Typography>{" "}
          </CardContent>
        </Grid>
      </Grid>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
