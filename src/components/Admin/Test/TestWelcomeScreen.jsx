import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FlagIcon from "@mui/icons-material/Flag";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
const navbarHeights = {
  xs: 32,
  sm: 36,
  md: 40,
  lg: 44,
};

const generateResponsiveStyles = (property, valueGenerator) => ({
  [property]: Object.fromEntries(
    Object.entries(navbarHeights).map(([breakpoint, navbarHeight]) => [
      breakpoint,
      valueGenerator(navbarHeight),
    ])
  ),
});

function TestWelcomeScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const footerHeight = isSmallScreen ? "10vh" : "10vh";
  const containerHeight = `calc(100vh - ${navbarHeights.xs}px - ${footerHeight})`;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={generateResponsiveStyles(
            "minHeight",
            (navbarHeight) => `${navbarHeight}px`
          )}
        >
          <Typography variant="h6" style={{ color: "#012970" }}>
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="xl"
        sx={{
          ...generateResponsiveStyles("height", () => containerHeight),
          backgroundColor: "#F0F4FB",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2, // Add padding to the container
        }}
      >
        <Box
          sx={{ alignSelf: "center", width: "100%", margin: 0, padding: 0 }}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" }, marginBottom: "20px",  marginLeft:"10%" }}>
            <Typography
              variant="h3"
              style={{ marginBottom: "0px", whiteSpace: "nowrap" }}
            >
              Welcome to
            </Typography>
            <Typography
              variant="h4"
              style={{ marginBottom: "20px", whiteSpace: "nowrap" }}
            >
              Sample test
            </Typography>{" "}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginLeft:"10%" ,
                marginTop:"5%"
              }}
            >
              <Box sx={{ margin: "0%",}}>
                <Typography variant="h6">Questions</Typography>
                <Typography variant="body1">20 Questions</Typography>
              </Box>
              <Box sx={{ margin: "" }}>
                <Typography variant="h6">Sections</Typography>
                <Typography variant="body1">4 Sections</Typography>
              </Box>
              <Box sx={{ margin: "" }}>
                <Typography variant="h6">Test Duration</Typography>
                <Typography variant="body1">90 Minutes</Typography>
              </Box>
            </Box>
            <hr />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", pt: 15, pb: 15 }}
        >
          <Card
            sx={{
              mr: 0,
              width: { xs: "50%", sm: "100%" },
              height: "50%",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Requesting Permissions
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4, display: "block", mx: "auto" }}
                onClick={() => {
                  // Handle click event
                  console.log("Button clicked");
                }}
              >
                System Check + Face Capture
              </Button>
              <Typography
                variant="h6"
                component="div"
                sx={{ mt: 3, textAlign: "left" }}
              >
                Instructions
              </Typography>
              <Card
                sx={{
                  m: 3,
                  height: "50%",
                  overflow: "auto",
                  backgroundColor: "#F0F4FB",
                  pb: "0",
                  mb: "0",
                  maxHeight: "300px",
                }}
              >
                {" "}
                <CardContent>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        The duration of the test is 90 minutes from the time you
                        start.
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        The test needed to be taken in one seating only.
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        If the internet is disconnected due to certain
                        unavoidable reasons, you can login again with the same
                        credentials and continue the assessment from where it
                        was left.
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        If case of camera not capturing your face, it will warn
                        u for 2 times and the 3rd time the test will
                        automatically be closed and submitted.
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        It is mandatory to take the entire test.
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Typography variant="body2">
                        The test consists of 4 sections which includes a total
                        of 20 questions.
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Box
        sx={{
          p: 1,
          height: footerHeight,
          backgroundColor: "white",
          mt: "auto",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">
              © 2023 Cadet UI. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Need help? Contact us: <FlagIcon /> +91 9045678965
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Powered by <img src="logo_url" alt="Logo" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default TestWelcomeScreen;
