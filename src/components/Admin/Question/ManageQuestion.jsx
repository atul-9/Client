import React from "react";
import Example from "./Table";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
  Box,
  styled,
} from "@mui/material";

function ManageQuestion() {
  const CustomSelect = styled(Select)({
    "& .MuiSelect-select": {
      paddingTop: 4,
      paddingBottom: 4,
      marginBottom: 5,
    },
  });

  const CustomTypography = styled(Typography)({
    marginBottom: "0rem", // Increase this to increase the distance between the field and the label of another column
    marginLeft: "15%",
  });

  console.log("Hello");

  return (
    // <Container style={{ marginTop: "5%", marginLeft: "10%", overflow: "auto" }}>
    <Container maxWidth="xl" style={{ marginLeft: "7%", marginTop: "0%" }}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "5%", marginLeft: "12%", padding: "1%" }}
        >
          Manage Quetions
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper
            elevation={3}
            style={{
              padding: "2%",

              // margin: "auto",
              height: "50%",
              marginTop: "0%",
              marginLeft: "13%",
              marginRight: "7%",
              overflow: "auto",
            }}
          >
            <Typography variant="h6" mt={0}>
              Filter the Questions here...
            </Typography>
            <Card sx={{ maxWidth: "100%", mt: 0, top: 0 }}>
              <CardContent sx={{ padding: 2 }}>
                <Grid
                  container
                  spacing={2} // reduce spacing
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* First Row */}
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant="body1">
                          Section
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-degree-select-label"
                            id="ug-degree-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>Degree 1</MenuItem>
                            <MenuItem value={20}>Degree 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant="body1">
                        Difficulty Level : 
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-degree-select-label"
                            id="pg-degree-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>Degree 1</MenuItem>
                            <MenuItem value={20}>Degree 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                        Topic :
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-college-select-label"
                            id="ug-college-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>College 1</MenuItem>
                            <MenuItem value={20}>College 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Second Row */}
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          Type :
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-college-select-label"
                            id="pg-college-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={10}>College 1</MenuItem>
                            <MenuItem value={20}>College 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                        Creation Date from :
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="ug-year-select-label"
                            id="ug-year-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={1}>Year 1</MenuItem>
                            <MenuItem value={2}>Year 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <CustomTypography variant=" body1">
                          to : 
                        </CustomTypography>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomSelect
                            labelId="pg-year-select-label"
                            id="pg-year-select"
                            defaultValue=""
                            size="small"
                          >
                            {/* Populate MenuItems here */}
                            <MenuItem value={1}>Year 1</MenuItem>
                            <MenuItem value={2}>Year 2</MenuItem>
                          </CustomSelect>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Button Row */}
                  <Grid item xs={4}>
                    <Grid container justifyContent="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        mt="1"
                      >
                        Get the Students
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: "100%", mt: 1, top: 2, marginTop: "2%" }}>
              <CardContent sx={{ padding: 0 }}>
                <Example overflow="auto" style={{ padding: 0 }} />
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ManageQuestion;
