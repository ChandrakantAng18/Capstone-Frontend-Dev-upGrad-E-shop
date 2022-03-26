import React from "react";
import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Badge></Badge>
          <Box></Box>
          <IconButton></IconButton>
          <ShoppingCartIcon sx={{ margin: "10px" }}></ShoppingCartIcon>
          <Typography>upGrad E-Shop</Typography>
          <SearchIcon sx={{ margin: "0px 0px 0px 500px" }}></SearchIcon>
          <InputBase
            sx={{ color: "red", border: "1px solid blue" }}
          ></InputBase>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
