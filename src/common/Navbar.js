// import React from "react";
import { AppBar, Typography, Toolbar, Box, ButtonGroup } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
// import Box from "@mui/ material/Box";
import Badge from "@mui/material/Badge";
//grit items imports
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CommonButton from "./CommonButton";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // backgroundColor: "lightblue",
}));

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Toolbar>
                <ShoppingCartIcon></ShoppingCartIcon>
                <Typography>upGrad E-Shop</Typography>
              </Toolbar>
            </Grid>
            <Grid item xs={6}>
              <Toolbar>
                <SearchIcon></SearchIcon>
                <InputBase></InputBase>
              </Toolbar>
            </Grid>
            <Grid item xs={1}>
              <Toolbar>
                <Button variant="text" sx={{ color: "White" }}>
                  Home
                </Button>
              </Toolbar>
            </Grid>
            <Grid item xs={1}>
              <Toolbar>
                <Button variant="contained" color="success">
                  Logout
                </Button>
              </Toolbar>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;

{
  /* <IconButton></IconButton>
              <SearchIcon sx={{ margin: "0px 0px 0px 500px" }}></SearchIcon>
              <InputBase
                sx={{ color: "red", border: "1px solid blue" }}
              ></InputBase> */
}

{
  /* <Grid item xs={2} spacing={4}>
              <Stack direction="row" spacing={0}>
                <Toolbar>
                  <Typography>Home</Typography>
                  <Typography>Login</Typography>
                  <Button variant="contained" color="success">
                    Logout
                  </Button>
                </Toolbar>
              </Stack>
            </Grid> */
}
