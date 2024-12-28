import * as React from "react";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useState } from "react";
import { AppBar, Toolbar, IconButton, InputAdornment } from "@mui/material";
// import { Link } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rnavbar from "../Global/Rnavbar";
import Footer from "./Student/Footer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Aptitude
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      mobilenumber: data.get("mobilenumber"),
      email: data.get("email"),
      collegeemail: data.get("collegeemail"),
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
      dob: data.get("dob"), // Getting date of birth value
    });
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      

     <div style={{overflowY:"auto",height:"100vh"}}>
     <Rnavbar />
     <Grid
        container
        component="main"
        style={{ background: "#F0F4FB", marginTop: "1.5rem" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // overflow:"auto",
            // height:"93vh"
          }}
          textAlign={"center"}
        >
          <Box
            sx={{
              my: 1,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // overflow:"auto",

            }}
          >
            <Typography component="h1" variant="h2">
              {/* text added  */}
              Embark on path
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{ mx: 0, color: "#0000FF", fontWeight: "600" }}
            >
              to your advancement right here
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              sx={{ mx: 0, fontWeight: "500" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptates est iste tenetur eligendi fuga maiores, praesentium
              enim ipsa facilis asperiores vitae nisi hic nostrum fugit
              reiciendis mollitia aspernatur laudantium!
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ ms: 2 }}
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // overflow:"auto"
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
             
            >
              <TextField
                // margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobilenumber"
                label="Mobile Number"
                name="mobilenumber"
                autoComplete="mobilenumber"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="collegeemail"
                label="College Email Address"
                name="collegeemail"
                autoComplete="email"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleTogglePasswordVisibility("password")
                        }
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmpassword"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleTogglePasswordVisibility("confirmPassword")
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                sx={{ alignItems: "left" }}
                control={<Checkbox value="showpassw" color="primary" />}
                label="Show Password"
              />
              {/* Inserting Date of Birth input field */}
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="gender"
                    autoFocus
                    size="small"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => {
                  window.location.href = "/login";
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
     
      <Footer />
      </div>
    </ThemeProvider>
  );
}