import React,{useState} from "react";
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
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

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


const Profile = () => {

  const defaultTheme = createTheme();

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data'); // Replace with your API URL
    const data = await response.json();
    setData(data);
  };

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (formData) => {
    const response = await fetch('https://api.example.com/data', { // Replace with your API URL
      method: 'POST', // Or 'PUT' if you're updating existing data
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    fetchData();
    setIsEditing(true);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down("sm"));
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").matches(/^[a-zA-Z ]*$/, 'Please enter only letters and spaces'),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup
      .string()
      .matches(/^[0-9]{10}$/, "Contact No. must be exactly 10 digits")
      .required("Contact No. is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),

      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid Container style={{display:"flex" ,marginLeft:"20%",marginTop:"8%",overflowY:"auto",height:"100vh"}}>
      {isSmallScreen ? null : <Grid item xs={2} sm={2} md={3} />}
      <Grid item xs={12} sm={10} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={2} style={{overflow:"auto"}}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/src/assets/round_profil_picture_after_.webp"
                      sx={{ width: 110, height: 110 }}
                      style={{ marginLeft: "10%" }}
                    />
                    <Typography> ProfileName </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
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
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} style={{overflow:"auto"}}>
              <Card elevation={4}>
                <Box p={2}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent style={{ paddingBottom: 0 }}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            htmlFor="profile"
                            style={{ color: "black" }}
                          >
                            Full Name :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="fullName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="profile"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{ backgroundColor: "#FFFFFF" }}
                                error={!!errors.fullName}
                                helperText={errors.fullName?.message}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent style={{ paddingBottom: 0 }}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            htmlFor="profile"
                            style={{ color: "black" }}
                          >
                            Email :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="profile"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{ backgroundColor: "#FFFFFF" }}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent style={{ paddingBottom: 0 }}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            htmlFor="profile"
                            style={{ color: "black" }}
                          >
                            Conatct No. :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="contactNo"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="profile"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{ backgroundColor: "#FFFFFF" }}
                                error={!!errors.contactNo}
                                helperText={errors.contactNo?.message}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent style={{ paddingBottom: 0 }}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            htmlFor="profile"
                            style={{ color: "black" }}
                          >
                            Password :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="password"
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{ backgroundColor: "#FFFFFF" }}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  
                    <Box mt={2} display="flex" justifyContent="center">
                      <Stack
                        direction="row"
                        spacing={2}
                        style={{ marginRight: "10%" }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          style={{ marginLeft: "45%"}}
                          onClick={isEditing ? undefined : handleEditClick}
                        >
                          {isEditing ? 'Submit' : 'Edit'}
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          onClick={handleClickOpen}
                          style={{width:"200px"}}
                        >
                          Update Password
                        </Button>
                          <Button
                            variant="contained"
                          >
                            Cancel
                          </Button>
                      </Stack>
                    </Box>
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
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : null}
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
                  </form>
                </Box>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default Profile;
