import React from 'react'


  import { Grid, TextField, Container,Select, MenuItem, InputLabel } from '@mui/material';
  function Results() {
  return (
    <Container
    style={{
      border: "1px solid black",
      marginLeft: "18%",
      marginTop: "4%",
      backgroundColor: "#F0F4FB",
      paddingBottom: "30px",
    }}
  >
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <TextField
        id="attempted-date"
        label="Attempted Date"
        variant="outlined"
        type='date'
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="creation-date"
        label="Creation Date"
        variant="outlined"
        type='date'
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <InputLabel id="created-by-label">Created By</InputLabel>
      <Select
        labelId="created-by-label"
        id="created-by"
        variant="outlined"
        fullWidth
      >
        <MenuItem value="User 1">User 1</MenuItem>
        <MenuItem value="User 2">User 2</MenuItem>
        {/* Add more MenuItem components as needed */}
      </Select>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="test-duration"
        label="Test Duration(in minutes)"
        variant="outlined"
        fullWidth
      />
    </Grid>
  </Grid>
</Container>

  )
}

export default Results