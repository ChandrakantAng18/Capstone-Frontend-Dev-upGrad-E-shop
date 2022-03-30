import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const ProductDetailSlave = ({ productById }) => {
  console.log("00--00-0-0-", productById);
  console.log("render");
  // useEffect(() => {
  //   const data = setData(productById);
  // }, [data]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid container spacing={10}>
          <Grid item xs={5}>
            <div className="left-main">
              {/* <img src={productById.imageURL} alt="product_image" /> */}
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
      </Grid>
    </>
  );
};

export default ProductDetailSlave;
