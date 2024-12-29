import React from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { List, ListItem } from "@mui/material";

import axios from "axios"; // Make sure axios is installed

const DefaultTheme = createTheme();

const MyList = () => {
  console.log("Entered");
  return (
    <ThemeProvider theme={DefaultTheme}>
      <List
        disablePadding={true}
        dense={true}
        sx={{
          listStyleType: "disc",
          listStylePosition: "inside",
        }}
        style={{ fontSize: "12px" }}
      >
        <ListItem sx={{ display: "list-item" }}>
          <strong>Full Name:</strong> This field should capture the student's
          full legal name.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <strong>Mobile Number:</strong> This field should capture the
          student's mobile phone number.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <strong>College Email Id:</strong> This field should capture the
          student's college email address.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <strong>Personal Email Id:</strong> This field should capture the
          student's personal email address. This will be used for login.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <strong>Date of Birth:</strong> This field should capture the
          student's date of birth. Use a calendar control to make it easy for
          users to enter this information.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <strong>Gender:</strong> This field should capture the student's
          gender. Use a drop-down menu with options for male, female, and other.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Password will be sent to the student's Personal Email address along
          with a verification link.
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

const AddSingle = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1000));
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    // Here you can implement the API call to submit the form data
    try {
      const response = await axios.post("http://localhost:8800/api/admin/addstudent", {name:data.fullName , email: data.personalEmail , cEmail: data.collegeEmail, mob:data.phoneNumber, dob:data.dob, gender:data.gender});
      console.log(response.data);
      // Handle success, such as showing a success message or redirecting the user
    } catch (error) {
      console.error("Failed to submit the form:", error);
      // Handle error, such as showing an error message to the user
    }
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        width: "100%",
        height: "100%",
        paddingRight: isSmallScreen ? "5%" : "20%",
        paddingBottom: "10%",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        alignItems: "right",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        style={{
          marginTop: isSmallScreen ? "10%" : "5%",
          marginLeft: "25%",
          padding: "1%",
        }}
      >
        Add Single Student
      </Typography>
      <Paper
        style={{
          width: isSmallScreen ? "80%" : "95%",
          display: "flex",
          // flexDirection: isSmallScreen ? "column" : "row",
          padding: "0%", // Remove or reduce the padding
          justifyContent: "space-between",
          maxHeight: "calc(100vh - 100px)", // Adjust the maximum height here
          QmarginTop: "2%",
          marginBottom: "5%", // Add some bottom margin
          marginLeft: isSmallScreen ? "20%" : "25%",

           overflow: "auto", // Add overflow auto
        }}
      >
        <Card style={{ flex: 1.5 }}>
          <CardContent style={{ paddingBottom: 0 , maxHeight:"400px",overflowY:"auto"}}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="profile" style={{ color: "black" }}>
                  Full Name :
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <TextField
                  {...register("fullName", {
                    required: "Full name is required",
                    validate: (value) =>
                      /^[A-Za-z ]+$/.test(value) ||
                      "Full name must only contain letters and spaces",
                  })}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName?.message}
                  id="fullName"
                  size="small"
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="phoneNumber" style={{ color: "black" }}>
                  Mobile Number :
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <TextField
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
                  id="phoneNumber"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="collegeEmail" style={{ color: "black" }}>
                  College Email Id :
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <TextField
                  {...register("collegeEmail", {
                    required: "College email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={Boolean(errors.collegeEmail)}
                  helperText={errors.collegeEmail?.message}
                  id="collegeEmail"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="personalEmail" style={{ color: "black" }}>
                  Personal Email Id:
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <TextField
                  {...register("personalEmail", {
                    required: "Personal email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={Boolean(errors.personalEmail)}
                  helperText={errors.personalEmail?.message}
                  id="personalEmail"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="dob" style={{ color: "black" }}>
                  Date of Birth :
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <TextField
                  {...register("dob", {
                    required: "Date of birth is required",
                  })}
                  error={Boolean(errors.dob)}
                  helperText={errors.dob?.message}
                  id="dob"
                  variant="outlined"
                  fullWidth
                  type="date"
                  size="small"
                  shrink={true}
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: "20px" }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="gender" style={{ color: "black" }}>
                  Gender :
                </InputLabel>
              </Grid>
              <Grid item xs={10} sm={7}>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <FormHelperText error>{errors.gender.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignContent={"center"}
            direction={isSmallScreen ? "column-reverse" : "row"}
            justify="center"
            alignItems="center"
            style={{ marginTop: "3%", marginBottom: "35%" }}
          >
            <Grid item xs={6} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                onClick={handleSubmit(onSubmit)}
                style={{ marginLeft: "50%" }}
              >
                Submit
              </Button>
            </Grid>
            {isSmallScreen && (
              <>
                <Grid item xs={6} sm={12}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleOpen}
                    size="small"
                    style={{ width: "100%" }}
                    // style={{ marginRight: "40%" }}
                  >
                    Instructions
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{"Instructions"}</DialogTitle>
                    <DialogContent>
                      <MyList />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </>
            )}
          </Grid>
        </Card>

        {!isSmallScreen && (
          <Card style={{ flex: 1, padding: "1%", margin: "0" }}>
            <CardContent style={{ paddingBottom: 0 }}>
              <Card style={{ padding: "0%", margin: "0%" }}>
                <CardContent style={{ paddingTop: "0", paddingBottom: "0" }}>
                  <Grid container direction="column" alignItems="center">
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      align="center"
                    >
                      Instructions
                    </Typography>
                    <List
                      disablePadding={true}
                      dense={true}
                      sx={{
                        listStyleType: "disc",
                        listStylePosition: "inside",
                      }}
                      style={{ fontSize: "15%", lineHeight: "1.5" }} // Reduced font size and adjusted line height
                    >
                      {<MyList />}
                    </List>
                  </Grid>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        )}
      </Paper>
    </Container>
  );
};

export default AddSingle;
