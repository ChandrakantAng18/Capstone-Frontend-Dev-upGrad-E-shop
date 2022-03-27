import React from "react";
import "./ProductDetail.css";
import PrimarySearchAppBar from "../common/AppBarNew";
import Grid from "@mui/material/Grid";
import ToggleButtons from "../common/ToggleButton";

// import Navbar from "../common/Navbar";
const ProductDetail = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
        </Grid>
        <Grid item xs={12}>
          <ToggleButtons />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <div className="left-main">
            <img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="product_image"
            />
          </div>
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={2}>
              phone
            </Grid>
            <Grid item xs={2}>
              quantity
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={12}>
              Category:Electronics
            </Grid>
            <Grid item xs={12}>
              product description
            </Grid>
            <Grid item xs={12}>
              PRICE
            </Grid>
            <Grid item xs={12}>
              COMBO BOX
            </Grid>
            <Grid item xs={12}>
              PLACE ORDER
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
