import React from "react";
import "./ProductDetail.css";
import PrimarySearchAppBar from "../common/AppBarNew";
import Grid from "@mui/material/Grid";
import ToggleButtons from "../common/ToggleButton";
import ProductDetailSlave from "../components/product-detail-slave/ProductDetailSlave";

// import Navbar from "../common/Navbar";
const ProductDetail = () => {
  return (
    <>
      <Grid container></Grid>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <ToggleButtons />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ProductDetailSlave />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
