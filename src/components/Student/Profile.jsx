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
  Button,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/material/Stack";
import Avatar from '@mui/material/Avatar';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  }); 
  
  function EducationalDetails() {
    const { control, handleSubmit, formState: { errors } } = useForm({

      resolver: yupResolver(schema)
    });
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="SSC / 10th" />
          <Tab label="HSC / 12th" />
          <Tab label="Graduation" />
          <Tab label="Post Graduation" />
        </Tabs>
        <TabPanel value={value} index={0}>
        <Paper elevation={2} style={{ padding: "2% 0" , paddingBottom: "30px", width:"700px", marginLeft:"10%"}} >
                  <Card elevation={4} style={{ marginLeft: "8%" ,backgroundColor: "#F0F4FB", width:"600px"}}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="profile" style={{color: "black"}}>Board :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <Controller
                        name="profile"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Select
                            {...field}
                            id="profile"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                            error={!!errors.profile}
                          >
                            <MenuItem value="CBSE">CBSE</MenuItem>
                            <MenuItem value="ICSE">ICSE</MenuItem>
                            <MenuItem value="State Board">State Board</MenuItem>
                          </Select>
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="year" style={{color: "black"}}>Year :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <Controller
                        name="year"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id="year"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                            error={!!errors.year}
                            helperText={errors.year ? errors.year.message : null}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>

                <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="percentage" style={{color: "black"}}>Percentage :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <Controller
                        name="percentage"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id="percentage"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                            error={!!errors.percentage}
                            helperText={errors.percentage ? errors.percentage.message : null}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent style={{paddingBottom: 0}}>
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <InputLabel htmlFor="school" style={{color: "black"}}>School :</InputLabel>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                      <Controller
                          name="school"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              id="school"
                              variant="outlined"
                              fullWidth
                              size="small"
                              style={{backgroundColor: "#FFFFFF"}}
                              error={!!errors.school}
                            >
                              <MenuItem value="School 1">School 1</MenuItem>
                              <MenuItem value="School 2">School 2</MenuItem>
                            </Select>
                          )}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>

                  <CardContent style={{paddingBottom: 0}}>
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <InputLabel htmlFor="location" style={{color: "black"}}>Location :</InputLabel>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                      <Controller
                          name="location"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              id="location"
                              variant="outlined"
                              fullWidth
                              size="small"
                              style={{backgroundColor: "#FFFFFF"}}
                              error={!!errors.location}
                            >
                              <MenuItem value="Location 1">Location 1</MenuItem>
                              <MenuItem value="Location 2">Location 2</MenuItem>
                            </Select>
                          )}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                
                  <CardContent style={{ paddingBottom: 0 }}>
                                            <Grid container spacing={0} alignItems="center">
                                           <Button
                                                 type="submit"
                                                variant="contained"
                                                 style={{ marginLeft: "45%", marginBottom: "2%" }}
                                               >
                                              Edit
                                              </Button>
                                         </Grid>
                      </CardContent>
                      </form>
                </Card>
                </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Paper elevation={2} style={{ padding: "1% 0" ,paddingBottom:"10px",width:"700px", marginLeft:"10%"}} >
              <Card elevation={4} style={{ marginLeft: "3.5%" ,backgroundColor: "#F0F4FB", width:"650px"}}>
              <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent style={{paddingBottom: 0}}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <InputLabel htmlFor="profile" style={{color: "black"}}>Board :</InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                  <Controller
                      name="profile"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          id="profile"
                          variant="outlined"
                          fullWidth
                          size="small"
                          style={{backgroundColor: "#FFFFFF"}}
                          error={!!errors.profile}
                        >
                          <MenuItem value="CBSE">CBSE</MenuItem>
                          <MenuItem value="ICSE">ICSE</MenuItem>
                          <MenuItem value="State Board">State Board</MenuItem>
                        </Select>
                      )}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="year" style={{color: "black"}}>Year :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Controller
                    name="year"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="year"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                        error={!!errors.year}
                        helperText={errors.year ? errors.year.message : null}
                      />
                    )}
                  />

                </Grid>
              </Grid>
            </CardContent>

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="percentage" style={{color: "black"}}>Percentage :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Controller
                    name="percentage"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="percentage"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                        error={!!errors.percentage}
                        helperText={errors.percentage ? errors.percentage.message : null}
                      />
                    )}
                  />

                </Grid>
              </Grid>
            </CardContent>

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="school" style={{color: "black"}}>School :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Controller
                    name="school"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="school"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                        error={!!errors.school}
                      >
                        <MenuItem value="School 1">School 1</MenuItem>
                        <MenuItem value="School 2">School 2</MenuItem>
                      </Select>
                    )}
                  />
                </Grid>
              </Grid>
            </CardContent>

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="location" style={{color: "black"}}>Location :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="location"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                        error={!!errors.location}
                      >
                        <MenuItem value="Location 1">Location 1</MenuItem>
                        <MenuItem value="Location 2">Location 2</MenuItem>
                      </Select>
                    )}
                  />
                </Grid>
              </Grid>
            </CardContent>

            <CardContent style={{paddingBottom: 0}}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <InputLabel htmlFor="stream" style={{color: "black"}}>Stream :</InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Controller
                      name="stream"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          id="stream"
                          variant="outlined"
                          fullWidth
                          size="small"
                          style={{backgroundColor: "#FFFFFF"}}
                          error={!!errors.stream}
                        >
                          <MenuItem value="Stream 1">Stream 1</MenuItem>
                          <MenuItem value="Stream 2">Stream 2</MenuItem>
                        </Select>
                      )}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent style={{ paddingBottom: 0 }}>
                                        <Grid container spacing={0} alignItems="center">
                                       <Button
                                             type="submit"
                                            variant="contained"
                                             style={{ marginLeft: "45%", marginBottom: "2%" }}
                                           >
                                          Edit
                                          </Button>
                                     </Grid>
                  </CardContent>
                  </form>
            </Card>
            </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Paper elevation={2} style={{ padding: "2% 0" , paddingBottom: "30px"}} >
                      <Card elevation={4} style={{ marginLeft: "5%" ,marginRight:"5%",backgroundColor: "#F0F4FB"}}>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="university" style={{color: "black"}}>University :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                              <TextField
                                id="university"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{backgroundColor: "#FFFFFF"}}
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="year" style={{color: "black"}}>Year :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                              <TextField
                                id="year"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{backgroundColor: "#FFFFFF"}}
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>
                      </Grid>


                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                      <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="prn" style={{color: "black"}}>PRN :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            id="prn"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                    <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="percent" style={{color: "black"}}>Percent :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            id="percent"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    </Grid>
                    </Grid>

                    <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={1.4}>
                          <InputLabel htmlFor="college" style={{color: "black"}}>College :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10.1}>
                          <TextField
                            id="college"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                   

                    <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={1.4}>
                          <InputLabel htmlFor="degree" style={{color: "black"}}>Degree :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10.1}>
                          <TextField
                            id="degree"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={1.4}>
                          <InputLabel htmlFor="branch" style={{color: "black"}}>Branch :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10.1}>
                          <TextField
                            id="branch"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                
                      <CardContent style={{ paddingBottom: 0 }}>
                                                <Grid container spacing={0} alignItems="center">
                                               <Button
                                                     type="submit"
                                                    variant="contained"
                                                     style={{ marginLeft: "45%", marginBottom: "2%" }}
                                                   >
                                                  Edit
                                                  </Button>
                                             </Grid>
                          </CardContent>
                    </Card>
                    </Paper>
        </TabPanel>
        <TabPanel value={value} index={3}><Paper elevation={2} style={{ padding: "2% 0" , paddingBottom: "30px"}} >
              <Card elevation={4} style={{ marginLeft: "5%" ,marginRight:"5%",backgroundColor: "#F0F4FB"}}>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="university" style={{color: "black"}}>University :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        id="university"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs={12} sm={6}>
                <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="year" style={{color: "black"}}>Year :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        id="year"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              </Grid>


            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="prn" style={{color: "black"}}>PRN :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="prn"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{backgroundColor: "#FFFFFF"}}
                  />
                </Grid>
              </Grid>
            </CardContent>
            </Grid>


            <Grid item xs={12} sm={6}>
            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <InputLabel htmlFor="percent" style={{color: "black"}}>Percent :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="percent"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{backgroundColor: "#FFFFFF"}}
                  />
                </Grid>
              </Grid>
            </CardContent>
            </Grid>
            </Grid>

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={1.4}>
                  <InputLabel htmlFor="college" style={{color: "black"}}>College :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={10.1}>
                  <TextField
                    id="college"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{backgroundColor: "#FFFFFF"}}
                  />
                </Grid>
              </Grid>
            </CardContent>
                   

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={1.4}>
                  <InputLabel htmlFor="degree" style={{color: "black"}}>Degree :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={10.1}>
                  <TextField
                    id="degree"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{backgroundColor: "#FFFFFF"}}
                  />
                </Grid>
              </Grid>
            </CardContent>

            <CardContent style={{paddingBottom: 0}}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} sm={1.4}>
                  <InputLabel htmlFor="branch" style={{color: "black"}}>Branch :</InputLabel>
                </Grid>
                <Grid item xs={12} sm={10.1}>
                  <TextField
                    id="branch"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{backgroundColor: "#FFFFFF"}}
                  />
                </Grid>
              </Grid>
            </CardContent>
                
              <CardContent style={{ paddingBottom: 0 }}>
                                        <Grid container spacing={0} alignItems="center">
                                       <Button
                                             type="submit"
                                            variant="contained"
                                             style={{ marginLeft: "45%", marginBottom: "2%" }}
                                           >
                                          Edit
                                          </Button>
                                     </Grid>
                  </CardContent>
            </Card>
            </Paper>
        </TabPanel>
      </div>
    );
  }

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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const onSubmit = (data) => {
  // handle form submission
};


const schema = yup.object().shape({
  fullname: yup.string().required('Full Name is required').matches(/^[a-zA-Z ]*$/, 'Please enter only letters and spaces'),
  gender: yup.string().required('Gender is required'),
  nationality: yup.string().required('Nationality is required').matches(/^[a-zA-Z ]*$/, 'Please enter only letters and spaces'),
  dob: yup.date().required('Date of Birth is required').max(new Date(), 'You cannot enter a future date'),
  profile: yup.string().required('Board is required'),
  year: yup.number().required('Year is required').min(1900, 'Year must be later than 1900').max(new Date().getFullYear(), 'Year must be earlier than current year'),
  percentage: yup.number().required('Percentage is required').min(0, 'Percentage must be greater than 0').max(100, 'Percentage must be less than 100'),
  school: yup.string().required('School is required'),
  location: yup.string().required('Location is required'),
  stream: yup.string().required('Stream is required'),
  newPassword: yup.string().required('New Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match')
 
});

export default function Profile() {

      const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });


  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [negativeMarking, setNegativeMarking] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ border: "1px solid black", marginTop:"5%" }}>
        <Grid container justifyContent="center">
          <Box sx={{ bgcolor: "background.paper", width: "80%" }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                sx={{ backgroundColor: "white" }}
                TabIndicatorProps={{ style: { backgroundColor: 'navyblue' } }}
              >
                <Tab label="Personal Info" {...a11yProps(0)} />
                <Tab label="Educational Details" {...a11yProps(1)} />
                <Tab label="Account" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                      <Paper elevation={2} style={{ height: "20vh" , marginTop: "1%", display: 'flex',
                        backgroundColor: "#F0F4FB", alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/src/assets/round_profil_picture_after_.webp"
                            sx={{ width: 136, height: 136 }}
                            style={{ marginLeft: "20%"}}
                          />
                          <Typography >  ProfileName </Typography>
                        </div>
                        <Stack
                          direction="row"
                          spacing={4}
                          style={{ marginRight: "6%" }}
                        >
                          <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload new Image
                            <VisuallyHiddenInput type="image" />
                          </Button>
                          <Button variant="contained" color="error">
                            Delete
                          </Button>
                        </Stack>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper elevation={2} style={{ padding: "2% 0" , paddingBottom: "25px", width:"700px", marginLeft:"10%"}} >
                      <Card elevation={4} style={{ marginLeft: "8%" ,backgroundColor: "#F0F4FB", width:"600px"}}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                      <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="fullname" style={{color: "black"}}>Full Name :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Controller
                                  name="fullname"
                                  control={control}
                                  defaultValue=""
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      id="fullname"
                                      variant="outlined"
                                      fullWidth
                                      size="small"
                                      style={{backgroundColor: "#FFFFFF"}}
                                      error={!!errors.fullname}
                                      helperText={errors.fullname ? errors.fullname.message : null}
                                    />
                                  )}
                                />
                            </Grid>
                          </Grid>
                        </CardContent>

                        <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="gender" style={{color: "black"}}>Gender :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                            <Controller
                                  name="gender"
                                  control={control}
                                  defaultValue=""
                                  render={({ field }) => (
                                    <Select
                                      {...field}
                                      id="gender"
                                      variant="outlined"
                                      fullWidth
                                      size="small"
                                      style={{backgroundColor: "#FFFFFF"}}
                                      error={!!errors.gender}
                                    >
                                      <MenuItem value="Male">Male</MenuItem>
                                      <MenuItem value="Female">Female</MenuItem>
                                      <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                  )}
                                />

                            </Grid>
                          </Grid>
                        </CardContent>

                        <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="nationality" style={{color: "black"}}>Nationality :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                            <Controller
                                  name="nationality"
                                  control={control}
                                  defaultValue=""
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      id="nationality"
                                      variant="outlined"
                                      fullWidth
                                      size="small"
                                      style={{backgroundColor: "#FFFFFF"}}
                                      error={!!errors.nationality}
                                      helperText={errors.nationality ? errors.nationality.message : null}
                                    />
                                  )}
                                />
                            </Grid>
                          </Grid>
                        </CardContent>

                        <CardContent style={{paddingBottom: 0}}>
                          <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} sm={3}>
                              <InputLabel htmlFor="dob" style={{color: "black"}}>Date of Birth :</InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                            <Controller
                                  name="dob"
                                  control={control}
                                  defaultValue=""
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      id="dob"
                                      variant="outlined"
                                      fullWidth
                                      type="date"
                                      size="small"
                                      style={{backgroundColor: "#FFFFFF"}}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      error={!!errors.dob}
                                      helperText={errors.dob ? errors.dob.message : null}
                                    />
                                  )}
                                />
                            </Grid>
                          </Grid>
                        </CardContent>
                          <CardContent style={{ paddingBottom: 0 }}>
                                                <Grid container spacing={0} alignItems="center">
                                               <Button
                                                     type="submit"
                                                    variant="contained"
                                                     style={{ marginLeft: "45%", marginBottom: "2%" }}
                                                   >
                                                  Edit
                                                  </Button>
                                             </Grid>
                          </CardContent>
                          </form>
                        </Card>
                      </Paper>
                    </Grid>
                  </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                    <EducationalDetails />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
              <Paper elevation={2} style={{ padding: "2% 0" , paddingBottom: "25px", width:"700px", marginLeft:"10%"}} >
              <Card elevation={4} style={{ marginLeft: "8%" ,backgroundColor: "#F0F4FB", width:"600px"}}>
              <CardContent style={{paddingBottom: 0}}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <InputLabel htmlFor="college" style={{color: "black"}}>Creation Date :</InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        id="college"
                        variant="outlined"
                        fullWidth
                        size="small"
                        style={{backgroundColor: "#FFFFFF"}}
                        disabled
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent style={{paddingBottom: 0}}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor="is-verified" style={{color: "black"}}>Is Verified :</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                        <TextField
                            id="college"
                            variant="outlined"
                            fullWidth
                            size="small"
                            style={{backgroundColor: "#FFFFFF"}}
                            disabled
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent style={{paddingBottom: 0}}>
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <InputLabel htmlFor="is-verified" style={{color: "black"}}>Password :</InputLabel>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                      <TextField
                          id="college"
                          variant="outlined"
                          fullWidth
                          size="small"
                          style={{backgroundColor: "#FFFFFF"}}
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <div>
                    <CardContent style={{ paddingBottom: 0 }}>
                      <Grid container spacing={0} alignItems="center">
                        <Button
                          type="submit"
                          variant="contained"
                          style={{ marginLeft: "35%" }}
                          onClick={handleClickOpen}
                        >
                          Update Password
                        </Button>
                      </Grid>
                    </CardContent>
                    <CardContent style={{ paddingBottom: 0 }}>
                                          <Grid container spacing={0} alignItems="center">
                                         <Button
                                               type="submit"
                                              variant="contained"
                                               style={{ marginLeft: "45%" , marginBottom: "2%"}}
                                             >
                                            Edit
                                            </Button>
                                       </Grid>
                    </CardContent>

                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Update Password</DialogTitle>
                      <DialogContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <Controller
                            name="newPassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                autoFocus
                                margin="dense"
                                id="new-password"
                                label="New Password"
                                type="password"
                                fullWidth
                                error={!!errors.newPassword}
                                helperText={errors.newPassword ? errors.newPassword.message : null}
                              />
                            )}
                          />

                          <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                margin="dense"
                                id="confirm-password"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword ? errors.confirmPassword.message : null}
                              />
                            )}
                          />
                      <DialogActions>
                            <Button onClick={handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button type="submit" color="primary">
                              Update
                            </Button>
                          </DialogActions>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
                </Paper>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>
          <Box display="flex" justifyContent="center" >
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight:"60%"}}
            >
              Previous
            </Button>
            <Button variant="contained" >
              Next
            </Button>
          </Box>
    </Container>
  );
}
