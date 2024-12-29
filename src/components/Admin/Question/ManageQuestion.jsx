import React from "react";
import Table from "./Table";
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
                          Creation Date to :
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
                        Get the Questions
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: "100%", mt: 1, top: 2, marginTop: "2%" }}>
              <CardContent sx={{ padding: 0 }}>
                <Table overflow="auto" style={{ padding: 0 }} />
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ManageQuestion;

// import React, { useEffect, useState } from "react";
// import Table from "./Table"; // Ensure this is correctly pointing to your Table component
// import {
//   Button,
//   Card,
//   CardContent,
//   Container,
//   FormControl,
//   Grid,
//   MenuItem,
//   Paper,
//   Select,
//   Typography,
//   Box,
//   styled,
// } from "@mui/material";
// import axios from 'axios';

// function ManageQuestion() {
//   // State hooks for filter options
//   const [sections, setSections] = useState([]);
//   const [difficultyLevels, setDifficultyLevels] = useState([]);
//   const [topics, setTopics] = useState([]);
//   const [types, setTypes] = useState([]);

//   // State hooks for selected filter values
//   const [section, setSection] = useState('');
//   const [difficultyLevel, setDifficultyLevel] = useState('');
//   const [topic, setTopic] = useState('');
//   const [type, setType] = useState('');

//   // State hook for storing fetched questions
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const fetchFilterOptions = async () => {
//       try {
//         const sectionsRes = await axios.get('/api/sections');
//         const difficultyLevelsRes = await axios.get('/api/difficultyLevels');
//         const topicsRes = await axios.get('/api/topics');
//         const typesRes = await axios.get('/api/types');

//         setSections(sectionsRes.data);
//         setDifficultyLevels(difficultyLevelsRes.data);
//         setTopics(topicsRes.data);
//         setTypes(typesRes.data);
//       } catch (error) {
//         console.error('Error fetching filter options:', error);
//       }
//     };

//     fetchFilterOptions();
//   }, []);

//   const handleFetchQuestions = async () => {
//     try {
//       const { data } = await axios.get('/api/questions', {
//         params: {
//           section,
//           difficultyLevel,
//           topic,
//           type,
//         },
//       });
//       setQuestions(data);
//     } catch (error) {
//       console.error("Failed to fetch questions:", error);
//       setQuestions([]);
//     }
//   };

//   const CustomSelect = styled(Select)({
//     "& .MuiSelect-select": {
//       paddingTop: 4,
//       paddingBottom: 4,
//       marginBottom: 5,
//     },
//   });

//   const CustomTypography = styled(Typography)({
//     marginBottom: "0rem",
//     marginLeft: "15%",
//   });

//   // This is where you'd add your fetch questions logic based on selected filters
//   const handleFetchQuestions = () => {
//     console.log("Fetching questions...");
//     // Implement the fetching of questions here
//   };

//   return (
//     <Container maxWidth="xl" style={{ marginLeft: "7%", marginTop: "0%" }}>
//       <Grid item xs={12}>
//         <Typography
//           variant="h6"
//           component="h2"
//           gutterBottom
//           style={{ marginTop: "5%", marginLeft: "12%", padding: "1%" }}
//         >
//           Manage Questions
//         </Typography>
//       </Grid>

//       <Paper
//         elevation={3}
//         style={{
//           padding: "2%",
//           marginTop: "0%",
//           marginLeft: "13%",
//           marginRight: "7%",
//           overflow: "auto",
//         }}
//       >
//         <Card sx={{ maxWidth: "100%", mt: 0, top: 0 }}>
//           <CardContent sx={{ padding: 2 }}>
//             <Grid container spacing={2} alignItems="center" justifyContent="center">
//               {/* Repeated for each filter */}
//               <Grid item xs={6} md={3}>
//                 <Grid container alignItems="center">
//                   <Grid item xs={6}>
//                     <CustomTypography variant="body1">Section</CustomTypography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <FormControl fullWidth>
//                       <CustomSelect
//                         value={section}
//                         onChange={(e) => setSection(e.target.value)}
//                         displayEmpty
//                         inputProps={{ 'aria-label': 'Without label' }}
//                       >
//                         <MenuItem value=""><em>None</em></MenuItem>
//                         {sections.map((section) => (
//                           <MenuItem key={section.id} value={section.value}>{section.label}</MenuItem>
//                         ))}
//                       </CustomSelect>
//                     </FormControl>
//                   </Grid>
//                 </Grid>
//               </Grid>
// {/* Difficulty Level Filter */}
// <Grid item xs={6} md={3}>
//   <Grid container alignItems="center">
//     <Grid item xs={6}>
//       <CustomTypography variant="body1">Difficulty Level</CustomTypography>
//     </Grid>
//     <Grid item xs={6}>
//       <FormControl fullWidth>
//         <CustomSelect
//           value={difficultyLevel}
//           onChange={(e) => setDifficultyLevel(e.target.value)}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           {difficultyLevels.map((level) => (
//             <MenuItem key={level.id} value={level.value}>{level.label}</MenuItem>
//           ))}
//         </CustomSelect>
//       </FormControl>
//     </Grid>
//   </Grid>
// </Grid>

// {/* Topic Filter */}
// <Grid item xs={6} md={3}>
//   <Grid container alignItems="center">
//     <Grid item xs={6}>
//       <CustomTypography variant="body1">Topic</CustomTypography>
//     </Grid>
//     <Grid item xs={6}>
//       <FormControl fullWidth>
//         <CustomSelect
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           {topics.map((topic) => (
//             <MenuItem key={topic.id} value={topic.value}>{topic.label}</MenuItem>
//           ))}
//         </CustomSelect>
//       </FormControl>
//     </Grid>
//   </Grid>
// </Grid>

// {/* Type Filter */}
// <Grid item xs={6} md={3}>
//   <Grid container alignItems="center">
//     <Grid item xs={6}>
//       <CustomTypography variant="body1">Type</CustomTypography>
//     </Grid>
//     <Grid item xs={6}>
//       <FormControl fullWidth>
//         <CustomSelect
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           {types.map((type) => (
//             <MenuItem key={type.id} value={type.value}>{type.label}</MenuItem>
//           ))}
//         </CustomSelect>
//       </FormControl>
//     </Grid>
//   </Grid>
// </Grid>

//             </Grid>
//             <Grid container justifyContent="center" sx={{ mt: 2 }}>
//               <Button variant="contained" size="small" onClick={handleFetchQuestions}>
//                 Get Questions
//               </Button>
//             </Grid>
//           </CardContent>
//         </Card>
//         {questions.length > 0 && (
//   <Card sx={{ maxWidth: "100%", mt: 1, top: 2, marginTop: "2%" }}>
//   <CardContent sx={{ padding: 0 }}>
//     <Table questions={questions} overflow="auto" style={{ padding: 0 }} />
//   </CardContent>
// </Card>
// )}

//       </Paper>
//     </Container>
//   );
// }

// export default ManageQuestion;
