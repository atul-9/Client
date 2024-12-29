import React from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  InputLabel,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WestIcon from "@mui/icons-material/West";
import { Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: "full-width-tab-" + index,
    "aria-controls": "full-width-tabpanel-" + index,
  };
}

export default function CreateTest() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [negativeMarking, setNegativeMarking] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const VisuallyHiddenInput = styled("input")({
    display: "none",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container
      style={{ border: "1px solid black", marginLeft: "20%", marginTop: "4%" , color : "red", maxWidth:"70%", maxHeight:"100% "}}
    >
      <Typography variant="h6" color={"navy"}>
        Create Test
      </Typography>
      <Paper
        sx={{ marginTop: 2, padding: 2 }}
        style={{ maxWidth: "100%", overflow: "auto", maxHeight: 450 }}
      >
        <Grid container justifyContent="center">
          <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                sx={{ backgroundColor: "white" }}
                // TabIndicatorProps={{ style: { backgroundColor: 'navyblue' } }}
              >
                <Tab label="Enter test Details" {...a11yProps(0)} />
                <Tab label="Test Settings" {...a11yProps(1)} />
                <Tab label="Add Questions" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                value={value}
                index={0}
                dir={theme.direction}
                style={{ overflow: "auto", maxHeight: 500 }}
              >
                <Typography>Enter test Details</Typography>
                <Paper
                  sx={{
                    marginTop: 2,
                    padding: 2,
                    backgroundColor: "lightblue",
                    overflow: "auto", // Add scrollbars when content overflows
                    maxHeight: "300px", // Adjust this value as needed
                  }}
                >
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="test-name">Title :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                          <TextField
                            id="test-name"
                            variant="outlined"
                            fullWidth
                            size="small"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="test-name">
                            Description :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                          <TextareaAutosize
                            id="test-name"
                            minRows={3}
                            style={{ width: "100%" }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="test-name">Image :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                          >
                            {image && (
                              <img
                                src={image}
                                alt="Uploaded"
                                style={{ width: "100px", height: "100px" }}
                              />
                            )}
                            <Button
                              component="label"
                              variant="contained"
                              startIcon={<CloudUploadIcon />}
                              size="small"
                            >
                              Upload Image
                              <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography>Test Settings</Typography>

                <Paper
                  sx={{
                    marginTop: 2,
                    padding: 2,
                    backgroundColor: "lightblue",
                    
                  }}
                >
                  <Paper
                    sx={{
                      marginTop: 1,
                      padding: 2,
                      marginBottom: 1,
                      paddingBlock: 3,
                      // overflow: 'auto', // Add scrollbars when content overflows
                      // maxHeight: '250px', // Adjust this value as needed
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel
                              htmlFor="loginstarttime"
                              style={{ whiteSpace: "normal" }}
                            >
                              Login start Time :
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="loginstarttime"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel
                              htmlFor="loginendtime"
                              style={{ whiteSpace: "normal" }}
                            >
                              Login End Time :{" "}
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="loginendtime"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel
                              htmlFor="testduration"
                              style={{ whiteSpace: "normal" }}
                            >
                              Test Duration :{" "}
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="testduration"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel
                              htmlFor="negativemarking"
                              style={{ whiteSpace: "normal" }}
                            >
                              Negative Marking :{" "}
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Select
                              id="negativemarking"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={negativeMarking}
                              onChange={(event) =>
                                setNegativeMarking(event.target.value)
                              }
                            >
                              <MenuItem value={"Yes"}>Yes</MenuItem>
                              <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      {negativeMarking === "No" && (
                        <Grid item xs={12} sm={12}>
                          <Box
                            display="flex"
                            justifyContent="center"
                            mt={2}
                            p={2}
                            style={{ whiteSpace: "normal" }}
                          >
                            <Card>
                              <Typography>Negative Marking(If No)</Typography>
                              <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                  <Grid item xs={4}>
                                    <InputLabel
                                      htmlFor="input1"
                                      style={{ whiteSpace: "normal" }}
                                    >
                                      Marks per Question :
                                    </InputLabel>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <TextField id="input1" variant="outlined" />
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Box>
                        </Grid>
                      )}
                      {negativeMarking === "Yes" && (
                        <Grid item xs={12} sm={12}>
                          <Box
                            display="flex"
                            justifyContent="center"
                            mt={2}
                            p={2}
                            style={{ whiteSpace: "normal" }}
                          >
                            <Card style={{ maxWidth: "400px" }}>
                              <Typography>Negative Marking(If Yes)</Typography>
                              <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                  <Grid item xs={4}>
                                    <InputLabel
                                      htmlFor="input1"
                                      style={{ whiteSpace: "normal" }}
                                    >
                                      Marks per Question :
                                    </InputLabel>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <TextField
                                      id="input1"
                                      variant="outlined"
                                      size="small"
                                    />
                                  </Grid>
                                  <Grid item xs={4}>
                                    <InputLabel
                                      htmlFor="input1"
                                      style={{ whiteSpace: "normal" }}
                                    >
                                      Negative Percentage :
                                    </InputLabel>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <TextField
                                      id="input1"
                                      variant="outlined"
                                      size="small"
                                    />
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography>Add Questions</Typography>
                <Paper
                  sx={{
                    marginTop: 2,
                    padding: 2,
                    backgroundColor: "lightblue",
                  }}
                >
                  <Paper
                    sx={{
                      marginTop: 1,
                      padding: 2,
                      marginBottom: 1,
                      paddingBlock: 1,
                      backgroundColor: "white",
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={6}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel htmlFor="input1">Section :</InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="input1"
                              variant="outlined"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <InputLabel htmlFor="input2">Type :</InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="input2"
                              variant="outlined"
                              size="small"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Card style={{ margin: "20px" }}>
                      <CardContent>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Typography>Difficulty Level</Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={8}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Typography>No of Questions</Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Typography>Easy : </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={8}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              id="input2"
                              variant="outlined"
                              size="small"
                              fullWidth
                              style={{ marginTop: "20px" }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Typography>Medium : </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={8}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              id="input2"
                              variant="outlined"
                              size="small"
                              fullWidth
                              style={{ marginTop: "20px" }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Typography>Difficulty : </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={8}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              id="input2"
                              variant="outlined"
                              size="small"
                              fullWidth
                              style={{ marginTop: "20px" }}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Paper>
                </Paper>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>
        <Box display="flex" mt={2} mb={5}>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 10px" }}
              size="small"
            >
              Previous
            </Button>
            <Button
              variant="contained"
              style={{ margin: "0 10px" }}
              size="small"
            >
              Next
            </Button>
          </Box>

        </Box>
      </Paper>
    </Container>
  );
}