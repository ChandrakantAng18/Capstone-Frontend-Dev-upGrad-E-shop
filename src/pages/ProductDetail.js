import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import PrimarySearchAppBar from "../common/AppBarNew";
import Grid from "@mui/material/Grid";
import ToggleButtons from "../common/ToggleButton";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import ProductDetailSlave from "../components/product-detail-slave/ProductDetailSlave";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 900,
    height: 500,
    width: 400,
  },
  root2: {
    maxWidth: 500,
    maxHeight: 900,
    height: 500,
    width: 700,
  },
  rootbutton: {
    borderRadius: 120,
    textTransform: "none",
  },
});
// import Navbar from "../common/Navbar";
const ProductDetail = () => {
  const classes = useStyles();
  const getUrl = window.location.pathname;
  const urlId = getUrl.split("/")[2];

  const [productById, setProductById] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${urlId}`)
      .then((res) => setProductById(res.data));
  }, []);
  console.log(productById);
  return (
    <>
      {/* <Grid container></Grid> */}
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <br />
            <Grid container>
              <ToggleButtons />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={3.2}>
            <br />

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="500"
                  image={productById.imageURL}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography> */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {/* {productById.description} */}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <br />
            <Card className={classes.root2}>
              <CardActionArea>
                <br />
                <br />
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {productById.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        className={classes.rootbutton}
                      >
                        Available Quantity: {productById.availableItems}
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    <br />
                    <br />
                    Category : {productById.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    {productById.description}
                  </Typography>
                  <Typography variant="body2" color="secondary" component="h3">
                    <br />
                    RS : {productById.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
              <CardActions></CardActions>
              <CardActions></CardActions>
              <CardActions></CardActions>
              <Button size="small" color="primary" variant="contained">
                PLACE ORDER
              </Button>
            </Card>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <h1>hi there </h1>
        </Grid> */}
      </Grid>
    </>
  );
};

export default ProductDetail;
