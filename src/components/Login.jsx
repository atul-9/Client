import * as React from 'react';
  // import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rnavbar from '../Global/Rnavbar';
import  { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputAdornment } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Footer from './Student/Footer';




function Copyright(props) {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Aptitude    
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function login() {

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    }
    
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <div style={{overflowY:"auto",height:"100vh"}}>
    <Rnavbar/>
      <Grid container component="main" sx={{ marginTop:"3rem" }}>
        <CssBaseline />
        <Grid
          item
          // xs={false}
          xs={12}
          sm={12}
          md={7}
          sx={{
           
            // my: 1,
            // mx: 4,
            display: 'flex',
            // flexDirection: 'column',
            justifyContent:"center",
            alignItems: 'center'
            
          }}
        >
           <Box sx={{
            my: 1,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:"center",
            alignItems: 'center'
          }} >
            <Typography component="h1" variant="h2" >
            {/* text added  */}
              Aptitude
            </Typography>
            <Typography component="h1" variant="h4"  sx={{mx:0, color:"#0000FF", fontWeight:'600'}} >
              for your personal growth
            </Typography>
            <Typography component="h1" variant="h6" sx={{mx:0, fontWeight:'500'}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates est iste tenetur eligendi fuga maiores, praesentium enim ipsa facilis asperiores vitae!
            </Typography>
          </Box>
       </Grid>
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              // justifyContent:"center",
              alignItems: 'center',
            }}
          >
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleTogglePasswordVisibility('password')}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
              <FormControlLabel sx={{alignItems: 'left'}}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
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
      <Footer/>
      </div>
    </ThemeProvider>
  );
}