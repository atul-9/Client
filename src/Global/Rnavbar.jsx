import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; 


const Rnavbar = () => {
  const [activeLink, setActiveLink] = useState("registration");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
// useEffect(()=>{
  
// },["activeLink"])

  return (
    
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        {/* Your logo */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Insert your logo icon or image here */}
        </IconButton>
        
        {/* Your logo title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "2.5rem" }}>
          <span>Aptitude</span>
          <Button
            color="inherit"
            component={Link}
            to="#"
            sx={{ fontWeight: activeLink === "home" ? "600" : "500", marginLeft: "1rem" }}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contactus"
            sx={{ fontWeight: activeLink === "contactus" ? "600" : "500", marginLeft: "1rem" }}
            onClick={() => setActiveLink("contactus")}
          >
            Contact Us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/feedback"
            sx={{ fontWeight: activeLink === "feedback" ? "600" : "500", marginLeft: "1rem" }}
            onClick={() => setActiveLink("feedback")}
          >
            Feedback
          </Button>
        </Typography>
        
        {/* Navigation links */}
        <Button
          color="inherit"
          component={Link}
          to="/login"
          sx={{ fontWeight: activeLink === "login" ? "600" : "500", marginLeft: "1rem" }}
          onClick={() => setActiveLink("login")}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/registration"
          sx={{ fontWeight: activeLink === "registration" ? "600" : "500", marginLeft: "2rem" }}
          onClick={() => setActiveLink("registration")}
        >
          Registration
        </Button>
      </Toolbar>
    </AppBar>
    
  );
};

export default Rnavbar;
