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
import Rating from '@mui/material/Rating';



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


    const Feedback = () => {
        const [text, setText] = useState('');
        const [error, setError] = useState(false);
      
        const handleChange = (event) => {
          setText(event.target.value);
          if (event.target.value.length < 4) {
            setError(true);
          } else {
            setError(false);
          }
        };




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
            Thank you!!!
            </Typography>
            <Typography component="h1" variant="h4" sx={{mx:0, color:"#0000FF", fontWeight:'600'}} align="center">
            Your responses have been submitted.                         </Typography>
          </Box>
       </Grid>
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              // justifyContent:"center",
              alignItems: 'center',
              marginRight: "2rem"
          
            }}
          >
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <InputLabel sx={{mt:2}} >
            How was your test experience?
                                        </InputLabel>
                                        <Rating
              name="test-experience-rating"
              defaultValue={0}
              size="large"
            />
              <InputLabel sx={{mt:2}} >
              Anything else you want to tell us? 
                            </InputLabel>
                            <div>
              <TextareaAutosize
                margin="normal"
                required
                minRows={10}
                maxRows={10}
                style={{width:"100%"}}
                value={text}
                onChange={handleChange}
                />
            {error && <div style={{ color: 'red' }}>Minimum 4 characters required</div>}
    </div>
             <Typography >
              * Minimum 4 characters are required to post a feedback
              </Typography>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit your feedback
              </Button>
             
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      </div>
    </ThemeProvider>
  );
}
export default Feedback;