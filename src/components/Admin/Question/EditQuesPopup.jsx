import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import TextField from "@mui/material/TextField";
import MyQuillComponent from "./TextEditor";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Radio from '@mui/material/Radio';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Popup({ isopen, inhandleClose, row,iseditable }) {
  // const [open, setOpen] = React.useState(isopen);
  // console.log(isopen)
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(inhandleClose);
  console.log(row);
  return (
    <div>
      {/* <Button variant="contained" onClick={handleOpen}>
        Open Popup
      </Button> */}
      <Modal
        open={isopen}
        onClose={inhandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={inhandleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2">
            Details of the Question
          </Typography>
          <Paper style={{ height: "50%", overflow: "auto", padding: "1%" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "29%" }}
                  >
                    Section:
                  </Typography>
                 
                    <TextField
                    contentEditable={iseditable}
                    size="small"
                    value={row.section}
                    style={{ width: "50%", marginLeft: "16px" }}
                  />
                  
                </Box>
              </Grid>

              {/* Repeat for each item */}
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "5%" }}
                  >
                    Difficulty Level:
                  </Typography>
                  <TextField
                    size="small"
                    value={row.difficultylevel}
                    style={{ width: "50%", marginLeft: "16px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                >
                  <Typography variant="body1" component="div" display="flex">
                    Is Company Specific:
                  </Typography>
                  <FormControl
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  >
                    <Select label="Select Section" default value={row.iscompanyspecific}>

                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              {/* And so on... */}
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "32%" }}
                  >
                    Topic :
                  </Typography>
                  <FormControl
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  >
                    <Select label="Select Section">
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {/* Repeat for each item */}
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "22%" }}
                  >
                    Type :
                  </Typography>
                  <FormControl
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  >
                    <Select label="Select Section">
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "7%" }}
                  >
                    Company Name :
                  </Typography>
                  <FormControl
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  >
                    <Select label="Select Section">
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "16%" }}
                  >
                    Creation Date :
                  </Typography>
                  <TextField
                    id="date"
                    type="date"
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>

              {/* Repeat for each item */}
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "11%" }}
                  >
                    Created by:
                  </Typography>
                  <TextField
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    style={{ marginRight: "28%" }}
                  >
                    Tags :
                  </Typography>
                  <FormControl
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  >
                    <Select label="Select Section">
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography variant="body1" component="div" display="flex">
                    Last Modification Date :
                  </Typography>
                  <TextField
                    id="date"
                    type="date"
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>

              {/* Repeat for each item */}
              <Grid item xs={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  padding={"10"}
                  width="100%"
                  marginTop={1}
                >
                  <Typography variant="body1" component="div" display="flex">
                    Last Modification :
                  </Typography>
                  <TextField
                    size="small"
                    style={{ width: "50%", marginLeft: "16px" }}
                  />
                </Box>
              </Grid>

              <Grid item xs={4}></Grid>
              {/* And so on... */}
            </Grid>
          </Paper>

          <Box mt={2}>
            <Typography variant="h6" component="h2">
              Question
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Card style={{ width: "100%", margin: "auto", height: "40vh" }}>
                  <MyQuillComponent />
                </Card>
              </Grid>
              <Grid item xs={5}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="h6" component="h2" align="center">
                        Correct
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="h6" component="h2" align="center">
                        Question Option
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Card
                        style={{ width: "100%", margin: "auto", height: "8vh" }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              align="center"
                              style={{
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              A
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  style={{ display: 'flex', justifyContent: 'center'}}>
                          <Radio color="primary"/>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={9}>
                      <Card style={{ width: "100%", margin: "auto" }}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <TextField
                            multiline
                            rows={1}
                            variant="outlined"
                            style={{ width: "100%", marginRight: "16px" }}
                          />
                          <Box display="flex" justifyContent="flex-end">
                            <ModeEditOutlineOutlinedIcon />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={3}>
                      <Card
                        style={{ width: "100%", margin: "auto", height: "8vh" }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              align="center"
                              style={{
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              B
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  style={{ display: 'flex', justifyContent: 'center'}}>
                          <Radio color="primary"/>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={9}>
                      <Card style={{ width: "100%", margin: "auto" }}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <TextField
                            multiline
                            rows={1}
                            variant="outlined"
                            style={{ width: "100%", marginRight: "16px" }}
                          />
                          <Box display="flex" justifyContent="flex-end">
                            <ModeEditOutlineOutlinedIcon />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={3}>
                      <Card
                        style={{ width: "100%", margin: "auto", height: "8vh" }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              align="center"
                              style={{
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              C
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  style={{ display: 'flex', justifyContent: 'center'}}>
                          <Radio color="primary"/>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={9}>
                      <Card style={{ width: "100%", margin: "auto" }}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <TextField
                            multiline
                            rows={1}
                            variant="outlined"
                            style={{ width: "100%", marginRight: "16px" }}
                          />
                          <Box display="flex" justifyContent="flex-end">
                            <ModeEditOutlineOutlinedIcon />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={3}>
                      <Card
                        style={{ width: "100%", margin: "auto", height: "8vh" }}
                      >
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              align="center"
                              style={{
                                backgroundColor: "navy",
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              D
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  style={{ display: 'flex', justifyContent: 'center'}}>
                          <Radio color="primary"/>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={9}>
                      <Card style={{ width: "100%", margin: "auto" }}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <TextField
                            multiline
                            rows={1}
                            variant="outlined"
                            style={{ width: "100%", marginRight: "16px" }}
                          />
                          <Box display="flex" justifyContent="flex-end">
                            <ModeEditOutlineOutlinedIcon />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={inhandleClose}
                style={{ margin: "0 10px" }}
              >
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
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Typography>Next</Typography>
              <EastIcon />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
