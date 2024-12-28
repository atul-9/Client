import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/icons-material/Close';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 1, // Padding top set to 0
  pb: 0, // Padding bottom set to 0
  pl: 3, // Padding left set to 4
  pr: 3, // Padding right set to 4
};

const validationSchema = yup.object({
  fullName: yup
    .string("Enter your full name")
    .required("Full Name is required"),
  gender: yup.string("Select your gender").required("Gender is required"),
  nationality: yup
    .string("Select your nationality")
    .required("Nationality is required"),
  mobileNo: yup
    .string("Enter your mobile number")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  dateOfBirth: yup
    .date("Select your date of birth")
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const studentPopUp = ({isopen, inhandleClose, row,iseditable} ) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      nationality: "",
      mobileNo: "",
      dateOfBirth: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      // Add your submit logic here
    },
    validateOnChange: true, // Add this line
  });
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ position: 'relative' }}>
          
          <Modal
            open={isopen}
            onClose={inhandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                style={{ position: "absolute", right: 5, top: 0 }}
                onClick={inhandleClose}
              >
                <CloseIcon onClick={handleClose} />
              </IconButton>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "1%" }}
              >
                Personal Info
              </Typography>
              <Card style={{ marginBottom: "2%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "5%" }}
                            htmlFor="fullName"
                          >
                            Full Name
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            id="fullName"
                            name="fullName"
                            fullWidth
                            size="small"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.fullName &&
                              Boolean(formik.errors.fullName)
                            }
                            helperText={
                              formik.touched.fullName && formik.errors.fullName
                            }
                           
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                            htmlFor="gender"
                          >
                            Gender
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <Box boxShadow={1}>
                            <FormControl fullWidth required>
                              <Select
                                id="gender"
                                name="gender"
                                size="small"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                error={
                                  formik.touched.gender &&
                                  Boolean(formik.errors.gender)
                                }
                               
                              >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                            htmlFor="nationality"
                          >
                            Nationality
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <Box boxShadow={1}>
                            <FormControl fullWidth required>
                              <Select
                                id="nationality"
                                name="nationality"
                                value={formik.values.nationality}
                                size="small"
                                onChange={formik.handleChange}
                                error={
                                  formik.touched.nationality &&
                                  Boolean(formik.errors.nationality)
                                }
                              >
                                <MenuItem value="American">American</MenuItem>
                                <MenuItem value="British">British</MenuItem>
                                <MenuItem value="Indian">Indian</MenuItem>
                                {/* Add more nationalities as needed */}
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "5%" }}
                            htmlFor="mobileNor"
                          >
                            Mobile Number
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            id="mobileNo"
                            name="mobileNo"
                            fullWidth
                            size="small"
                            value={formik.values.mobileNo}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.mobileNo &&
                              Boolean(formik.errors.mobileNo)
                            }
                            helperText={
                              formik.touched.mobileNo && formik.errors.mobileNo
                            }
                            
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                            htmlFor="dateOfBirth"
                          >
                            Date of Birth
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            fullWidth
                            size="small"
                            value={formik.values.dateOfBirth}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.dateOfBirth &&
                              Boolean(formik.errors.dateOfBirth)
                            }
                            helperText={
                              formik.touched.dateOfBirth &&
                              formik.errors.dateOfBirth
                            }
                            InputProps={{ style: { fontSize: "0.8rem" } }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <InputLabel
                            style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                            htmlFor="email"
                          >
                            Email
                          </InputLabel>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            id="email"
                            name="email"
                            fullWidth
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                           
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* ...rest of the fields... */}
                  </Grid>
                </CardContent>
              </Card>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "1%" }}
              >
                Educational Details
              </Typography>
              <Card style={{ marginBottom: "2%" }}>
                <Box style={{ height: "150px", overflow: "auto" }}>
                  <CardContent>
                    <Typography variant="body2" component="div">
                      SSC/10th
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="board"
                            >
                              Board
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <FormControl fullWidth>
                                <Select id="board" size="small">
                                  <MenuItem value="Board 1">Board 1</MenuItem>
                                  <MenuItem value="Board 2">Board 2</MenuItem>
                                  {/* Add more boards as needed */}
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          style={{ marginTop: "10px" }}
                        >
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="school"
                            >
                              School
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="school" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="year"
                            >
                              Year
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="year" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          style={{ marginTop: "10px" }}
                        >
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="location"
                            >
                              Location
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="location" size="small" marginLeft="35%"/>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                              htmlFor="percentage"
                            >
                              Percentage
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField id="percentage" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Typography variant="body2" component="div" marginTop={5}>
                      HSC/12th
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="board"
                            >
                              Board
                            </InputLabel>
                          </Grid>

                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <FormControl fullWidth>
                                <Select id="board" size="small">
                                  <MenuItem value="Board 1">Board 1</MenuItem>
                                  <MenuItem value="Board 2">Board 2</MenuItem>
                                  {/* Add more boards as needed */}
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          style={{ marginTop: "10px" }}
                        >
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="school"
                            >
                              School
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="school" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="year"
                            >
                              Year
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="year" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          style={{ marginTop: "10px" }}
                        >
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="location"
                            >
                              Location
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField fullWidth id="location" size="small" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "15%" }}
                              htmlFor="Percentage"
                            >
                              Percentage
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <TextField
                                fullWidth
                                id="Percentage"
                                size="small"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          style={{ marginTop: "10px" }}
                        >
                          <Grid item xs={3}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "35%" }}
                              htmlFor="Stream"
                            >
                              Stream
                            </InputLabel>
                          </Grid>
                          <Grid item xs={6}>
                            <Box boxShadow={1}>
                              <FormControl fullWidth>
                                <Select id="Stream" size="small">
                                  <MenuItem value="Stream 1">Science</MenuItem>
                                  <MenuItem value="Stream 2">Arts</MenuItem>
                                  {/* Add more schools as needed */}
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Box>
              </Card>
              <Typography variant="body1" component="div">
                Accounts
              </Typography>
              <Card>
                <Box>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={6}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={2}>
                            <InputLabel
                              style={{ fontSize: "0.8rem" }}
                              htmlFor="password"
                            >
                              Password
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Box boxShadow={1}>
                              <TextField
                                id="password"
                                size="small"
                                fullWidth
                                m
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item xs={2}>
                            <InputLabel
                              style={{ fontSize: "0.8rem", marginLeft: "100" }}
                              htmlFor="Is Verified"
                            >
                              Is Verified
                            </InputLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Box boxShadow={1}>
                              <TextField
                                id="Is Verified"
                                size="small"
                                fullWidth
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Box>
              </Card>
              <Box display="flex" mt={2}>
                <Box display="flex" alignItems="center" algin="left">
                  <WestIcon />
                  <Typography>Previous</Typography>
                </Box>
                <Box display="flex" justifyContent="center" flexGrow={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0 10px" }}
                    onClick={formik.handleSubmit} // Add this line
                  >
                    Edit
                  </Button>
                  <Button variant="contained" onClick= {inhandleClose} style={{ margin: "0 10px" }}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "0 10px" }}
                  >
                    Delete
                  </Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Typography>Next</Typography>
                  <EastIcon />
                </Box>
              </Box>
            </Box>
          </Modal>
        </div>
  );
};

export default studentPopUp;
