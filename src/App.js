import React from "react";
// import "./App.css";
// import "./common/common.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { LocalGasStation } from "@mui/icons-material";
//importing components
// import Navbar from "./common/Navbar";
import Home from "./components/home/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Shipping from "./pages/Shipping";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <>
      {/* <Home></Home> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
