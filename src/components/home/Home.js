import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import PrimarySearchAppBar from "../../common/AppBar";
import MediaCard from "../../common/CardNew";
import PrimarySearchAppBar from "../../common/AppBarNew";
import ToggleButtons from "../../common/ToggleButton";
const Home = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <h1>Home Page</h1>
        </Grid>
        <Grid item xs={12}>
          {/* <ToggleButtons /> */}
        </Grid>

        <Grid item xs={4}>
          <MediaCard
            image="https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
            product_name="Adidas"
            price="1200"
            description="A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function."
            buy="BUY"
          ></MediaCard>
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            product_name="CAMERA"
            price="1200"
            description="A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function."
            buy="BUY"
          ></MediaCard>
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            image="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1638557435572-UYISRNGX323H0CMYA0XM/iPhone+13.png?format=1000w"
            product_name="iPhone"
            price="74000"
            description="A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function."
            buy="BUY"
          ></MediaCard>
          {/* <Navbar></Navbar> */}
        </Grid>

        {/* <MediaCard></MediaCard> */}
        {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box> */}
      </Grid>
    </>
  );
};

export default Home;
