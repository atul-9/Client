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
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const onSubmit = (data) => {
  console.log(data);
};


const Profile = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup
      .string()
      .matches(/^[0-9]{10}$/, "Contact No. must be exactly 10 digits")
      .required("Contact No. is required"),
    oldPassword: yup
      .string()
      .min(8, "Old Password must be at least 8 characters")
      .required("Old Password is required"),
    newPassword: yup
      .string()
      .min(8, "New Password must be at least 8 characters")
      .required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Grid Container>
      {isSmallScreen ? null : <Grid item xs={2} sm={2} md={3} />}
      <Typography variant="h6"> Profile </Typography>
      <Grid item xs={12} sm={10} md={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={2}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/src/assets/round_profil_picture_after_.webp"
                      sx={{ width: 110, height: 110 }}
                      style={{ marginLeft: "15%" }}
                    />
                    <Typography> ProfileName </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
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
            <Paper elevation={2}>
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
                            Old Password :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="oldPassword"
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
                                error={!!errors.oldPassword}
                                helperText={errors.oldPassword?.message}
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
                            New Password :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="newPassword"
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
                                error={!!errors.newPassword}
                                helperText={errors.newPassword?.message}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent style={{ paddingBottom: "20px" }}>
                      <Grid container spacing={0} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <InputLabel
                            htmlFor="profile"
                            style={{ color: "black" }}
                          >
                            Confirm Password :
                          </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Controller
                            name="confirmPassword"
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
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
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
                          style={{ marginLeft: "45%", marginBottom: "2%" }}
                        >
                          Edit
                        </Button>
                        <Box ml={2}>
                          <Button
                            variant="contained"
                            style={{ marginBottom: "2%" }}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </form>
                </Box>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
