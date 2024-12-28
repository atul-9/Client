import React from 'react';
import { Grid, Typography, Link, TextField, Button, IconButton, Box, AppBar } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f7f9f9', padding: '2rem 0', marginTop: '2rem' , boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.3)'}}>
      <Grid container  justifyContent="center" textAlign="center" sx={{marginTop:"-1.2rem"}}>
        {/* Social links section */}
        <Grid item xs={12} md={4} lg={3} sx={{textAlign:"center", marginLeft:"-1rem"}} >
        <Typography variant="h4" gutterBottom>
            Aptitude
          </Typography>
          <IconButton color="primary" aria-label="facebook" >
            <Facebook sx={{ fontSize: "2rem" }} />
          </IconButton>
          <IconButton color="primary" aria-label="twitter">
            <Twitter sx={{ fontSize: "2rem" }} />
          </IconButton>
          <IconButton color="primary" aria-label="linkedin">
            <LinkedIn sx={{ fontSize: "2rem" }} />
          </IconButton>
          <IconButton color="primary" aria-label="linkedin">
            <Instagram sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Grid>

            {/* About, resources, contact, home links */}

        <Grid item xs={12} md={4} lg={3}>
         <Box >
           <Typography variant="h6" sx={{ fontSize: "1.3rem" }}>
            <Link href="#" sx={{ color: "black", textDecorationColor:"#d0d3d4" }}>About us</Link>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1.3rem" }}>
            <Link href="#" sx={{ color: "black" , textDecorationColor:"#d0d3d4" }}>Resources</Link>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1.3rem" }}>
            <Link href="#" sx={{ color: "black" , textDecorationColor:"#d0d3d4" }}>Home</Link>
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1.3rem" }}>
            <Link href="#" sx={{ color: "black" , textDecorationColor:"#d0d3d4" }}>Contact Us</Link>
          </Typography>
        </Box> 
        </Grid>
        {/* Blogs links section */}
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="h6" gutterBottom >
            Latest Blogs
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.3rem" }}>
            <Link href="#">Blog 1</Link>
            <br />
            <Link href="#">Blog 2</Link>
            <br />
            <Link href="#">Blog 3</Link>
          </Typography>
        </Grid>
        {/* Newsletter section */}
        <Grid item xs={12} sm={12} md={12} lg={3} textAlign="center">
          <Typography variant="h5" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <Typography variant="h6" gutterBottom>
            be the first to know about our latest updates, exclusive offers and more
          </Typography>
          <form style={{ display: 'flex', alignItems: 'center' ,justifyContent:"center"}}>
            <TextField label="Email" variant="outlined" size="small" />
            <Button variant="contained" color="primary" style={{ marginLeft: '1rem' }} >Subscribe</Button>
          </form>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
