import * as React from 'react';
  // import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rnavbar from '../Global/Rnavbar';
import  { useState } from 'react';
import {  TextareaAutosize } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
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

export default function contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    
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
              Contact Us
            </Typography>
            <Typography component="h1" variant="h6" sx={{mx:0, fontWeight:'500'}} align="center">
                        Need to get in touch with us. Either fill out your form with your inquiry or directly contact us on <b style={{mx:0, color:"#0000FF", fontWeight:'600'}}>cto.kodezera@gmail.com</b>.           
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  autoFocus
                  size="small"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  size="small"
                  label="Last Name"
                />
                </Grid>
                </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
              />
              <InputLabel sx={{mt:2}} >
                What can I help you with?
              </InputLabel>
              <TextareaAutosize
                margin="normal"
                required
                minRows={10}
                maxRows={10}
                style={{width:"100%"}}
                />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer/>
      </div>
    </ThemeProvider>
  );
}