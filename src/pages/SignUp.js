import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.upgrad.com/">
        upGrad
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = React.useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
    isAdmin: false,
  });

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  React.useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const requestOptions = {
    //   headers: { "Content-Type": "application/json" },
    //   body: registerUser,
    // };

    // axios.post("http://localhost:8000/api/users", registerUser).then((res) => {
    //   console.log(res);
    // });

    dispatch(
      dispatch(
        register(
          registerUser.first_name,
          registerUser.email,
          registerUser.password,
          registerUser.last_name,
          registerUser.phone_number
        )
      )
    );

    // console.log("res---------->>", response);
    // console.log("register:==>", registerUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clone = { ...registerUser };
    if (name === "first_name") {
      setRegisterUser({ ...clone, first_name: value });
    } else if (name === "last_name") {
      setRegisterUser({ ...clone, last_name: value });
    } else if (name === "email") {
      setRegisterUser({ ...clone, email: value });
    } else if (name === "password") {
      setRegisterUser({ ...clone, password: value });
    } else if (name === "confirm_password") {
      setRegisterUser({ ...clone, confirm_password: value });
    } else if (name === "phone_number") {
      setRegisterUser({ ...clone, phone_number: value });
    }
  };
  // console.log("registerUser", registerUser);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  autoComplete="given-name"
                  name="first_name"
                  value={registerUser.first_name}
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  label="Last Name"
                  value={registerUser.last_name}
                  name="last_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  value={registerUser.email}
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  value={registerUser.password}
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  value={registerUser.confirm_password}
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  value={registerUser.phone_number}
                  name="phone_number"
                  label="Contact Number"
                  type="String"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/login/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
      </Container>
    </ThemeProvider>
  );
}
