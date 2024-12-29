// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Tab,
//   Tabs,
//   AppBar,
//   Container,
//   Grid,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import TestTimer from "../components/TestScreen/TestTimer";
// import QuestionNavigator from "../components/TestScreen/QuestionNavigator";
// import QuestionDisplay from "../components/TestScreen/QuestionDisplay";
// import { TestContext } from "../Context/testContext";

// const TestPage = () => {
//   const [currentTab, setCurrentTab] = useState(0);
//   const { questions, currentSection, changeSection } = useContext(TestContext);

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const handlePrevious = () => {
//     setCurrentTab((prevTab) => Math.max(0, prevTab - 1));
//   };

//   const handleNext = () => {
//     setCurrentTab((prevTab) => Math.min(prevTab + 1, questions.length - 1));
//   };

//   const displayInstruction = ()=>{
//     alert("set your instructions")
//   }

//   return (
//     <Container maxWidth="xl" sx={{ px: 0 }}>
//       <Box mb={4}>
//         <AppBar position="static" color="default">
//           <Container maxWidth="xl">
//             <Grid container alignItems="center" justifyContent="space-between" px={2}>
//               <Grid item>
//                 <Typography variant="h5">Logo</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="h6" fontWeight={700}>
//                   <TestTimer duration={60 * 60} />
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Container>
//         </AppBar>
//       </Box>
//       <Grid container alignItems="stretch">
//         <Grid item xs={12} md={3} sx={{ backgroundColor: "#E2E5DE", maxHeight: "100vh" }}>
//           <Box p={2}>
//             <Typography variant="h6" fontWeight={600} mb={2}>
//               Question Overview:
//             </Typography>
//             <Box sx={{
//               maxHeight: 300,
//               overflowY: "scroll",
//               "&::-webkit-scrollbar": {
//                 width: "10px",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: "#0000FF",
//                 borderRadius: "10px",
//               },
//               "&::-webkit-scrollbar-thumb:hover": {
//                 backgroundColor: "#000066",
//               },
//               "&::-webkit-scrollbar-track": {
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "10px",
//               },
//             }}>
//               <QuestionNavigator />
//             </Box>
//             <Box mt={2}>
//               <Typography variant="body1">No Of Questions Attempted :</Typography>
//               <Typography variant="body1">No Of Questions Not Attempted :</Typography>
//               <Typography variant="body1">No Of Questions To Be Reviewed :</Typography>
//             </Box>
//             <Box display="flex" justifyContent="center" mt={3}>
//               <Button variant="contained" color="inherit" sx={{ width: '100%', maxWidth: 400, backgroundColor: "white", color: "black" }} onClick={displayInstruction} >
//                 Instructions
//               </Button>
//             </Box>
//             <Box display="flex" justifyContent="center" mt={3}>
//               <Button variant="contained" color="success" sx={{ width: '100%', maxWidth: 400 }} >
//                 <Link to="/result" style={{ textDecoration: "none", color: "black" }} >Finish Test</Link>
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Paper elevation={3} sx={{ mb: 3, px: 4, py: 3 }}>
//             <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3, marginTop: "-1rem" }}>
//               {questions.map((question, index) => (
//                 <Tab key={question.id} label={`Section ${question.section}`} onClick={() => changeSection(question.section)} />
//               ))}
//             </Tabs>
//             <QuestionDisplay currentQuestionIndex={currentTab} />
//           </Paper>
//           <Box display='flex' gap={1} justifyContent="center">
//             <Button variant="contained" color="warning" onClick={handlePrevious}>
//               Previous
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleNext}>
//               Next
//             </Button>
//             <Button variant="contained" color="error">
//               Clear Selection
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TestPage;








// TestPage.js

// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Tab,
//   Tabs,
//   AppBar,
//   Container,
//   Grid,
// } from "@mui/material";
// import QuestionNavigator from "../components/TestScreen/QuestionNavigator";
// import QuestionDisplay from "../components/TestScreen/QuestionDisplay";
// import TestTimer from "../components/TestScreen/TestTimer";
// import { TestContext } from "../Context/testContext";
// import { Link } from "react-router-dom";

// const TestPage = () => {
//   const [currentTab, setCurrentTab] = useState(0);
//   const { questions, selectedAnswers, setSelectedAnswers } = useContext(TestContext);

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const handlePrevious = () => {
//     setCurrentTab((prevTab) => Math.max(0, prevTab - 1));
//   };

//   const handleNext = () => {
//     setCurrentTab((prevTab) => Math.min(prevTab + 1, questions.length - 1));
//   };

//   const handleClearSelection = () => {
//     setSelectedAnswers((prevAnswers) => {
//       const updatedAnswers = { ...prevAnswers };
//       delete updatedAnswers[currentTab];
//       return updatedAnswers;
//     });
//   };

//     const displayInstruction = ()=>{
//     alert("set your instructions")
//   }

//   return (
//     <Container maxWidth="xl" sx={{ px: 0 }}>
//       {/* Your existing AppBar and other components */}
//       <Box mb={4}>
//         <AppBar position="static" color="default">
//           <Container maxWidth="xl">
//             <Grid container alignItems="center" justifyContent="space-between" px={2}>
//               <Grid item>
//                 <Typography variant="h5">Logo</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="h6" fontWeight={700}>
//                   <TestTimer duration={60 * 60} />
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Container>
//         </AppBar>
//       </Box>
//       <Grid container alignItems="stretch">
//         <Grid item xs={12} md={3} sx={{ backgroundColor: "#E2E5DE", maxHeight: "100vh" }}>
//           {/* QuestionNavigator component */}
//           <Box p={2}>
//             <Typography variant="h6" fontWeight={600} mb={2}>
//               Question Overview:
//             </Typography>
//             <Box sx={{
//               maxHeight: 300,
//               overflowY: "scroll",
//               "&::-webkit-scrollbar": {
//                 width: "10px",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: "#0000FF",
//                 borderRadius: "10px",
//               },
//               "&::-webkit-scrollbar-thumb:hover": {
//                 backgroundColor: "#000066",
//               },
//               "&::-webkit-scrollbar-track": {
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "10px",
//               },
//             }}>
//               <QuestionNavigator />
//             </Box>
//             <Box mt={2}>
//               <Typography variant="body1">No Of Questions Attempted :</Typography>
//               <Typography variant="body1">No Of Questions Not Attempted :</Typography>
//               <Typography variant="body1">No Of Questions To Be Reviewed :</Typography>
//             </Box>
//             <Box display="flex" justifyContent="center" mt={3}>
//               <Button variant="contained" color="inherit" sx={{ width: '100%', maxWidth: 400, backgroundColor: "white", color: "black" }} onClick={displayInstruction} >
//                 Instructions
//               </Button>
//             </Box>
//             <Box display="flex" justifyContent="center" mt={3}>
//               <Button variant="contained" color="success" sx={{ width: '100%', maxWidth: 400 }} >
//                 <Link to="/result" style={{ textDecoration: "none", color: "black" }} >Finish Test</Link>
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Paper elevation={3} sx={{ mb: 3, px: 4, py: 3 }}>
//             {/* Tabs for sections */}
//             <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3, marginTop: "-1rem" }}>
//               {questions.map((question, index) => (
//                 <Tab key={question.id} label={`Section ${question.section}`} onClick={() => changeSection(question.section)} />
//               ))}
//             </Tabs>
//             <QuestionDisplay currentQuestionIndex={currentTab} />
//           </Paper>
//           <Box display="flex" gap={1} justifyContent="center">
//             <Button variant="contained" color="warning" onClick={handlePrevious}>
//               Previous
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleNext}>
//               Next
//             </Button>
//             <Button variant="contained" color="error" onClick={handleClearSelection}>
//               Clear Selection
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TestPage;






// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Tabs,
//   Tab,
//   AppBar,
//   Container,
//   Grid,
// } from "@mui/material";
// import QuestionNavigator from "../components/TestScreen/QuestionNavigator";
// import QuestionDisplay from "../components/TestScreen/QuestionDisplay";
// import TestTimer from "../components/TestScreen/TestTimer";
// import { TestContext } from "../Context/testContext";
// import { Link } from "react-router-dom";

// const TestPage = () => {
//   const [currentTab, setCurrentTab] = useState(0);
  

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Manage the current question index
//   const { questions, setSelectedAnswers } = useContext(TestContext);

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1)); // Decrease current question index
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1)); // Increase current question index
//   };

//   const handleClearSelection = () => {
//     setSelectedAnswers((prevAnswers) => {
//       const updatedAnswers = { ...prevAnswers };
//       delete updatedAnswers[currentQuestionIndex];
//       return updatedAnswers;
//     });
//   };

//   const displayInstruction = () => {
//     alert("Set your instructions");
//   };

//   return (
//     <Container maxWidth="xl" sx={{ px: 0 }}>
//       <Box mb={4}>
//         <AppBar position="static" color="default">
//           <Container maxWidth="xl">
//             <Grid container alignItems="center" justifyContent="space-between" px={2}>
//               <Grid item>
//                 <Typography variant="h5">Logo</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="h6" fontWeight={700}>
//                   <TestTimer duration={60 * 60} />
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Container>
//         </AppBar>
//       </Box>
//       <Grid container alignItems="stretch">
//       <Grid item xs={12} md={3} sx={{ backgroundColor: "#E2E5DE", maxHeight: "100vh" }}>
//           <Box p={2}>
//             <Typography variant="h6" fontWeight={600} mb={2}>
//               Question Overview:
//             </Typography>
//             <Box sx={{
//               maxHeight: 300,
//               overflowY: "scroll",
              
//               "&::-webkit-scrollbar": {
//                 width: "10px",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: "#0000FF",
//                 borderRadius: "10px",
//               },
//               "&::-webkit-scrollbar-thumb:hover": {
//                 backgroundColor: "#000066",
//               },
//               "&::-webkit-scrollbar-track": {
//                 backgroundColor: "#F5F5F5",
//                 borderRadius: "10px",
//               },
//             }}>
//               <QuestionNavigator />
//                <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator />
//               <QuestionNavigator /> 
              
//               {/* Add more QuestionNavigators here */}
//             </Box>
//             <Box mt={2}>
//               <Typography variant="body1">No Of Questions Attempted :</Typography>
//               <Typography variant="body1">No Of Questions Not Attempted :</Typography>
//               <Typography variant="body1">No Of Questions To Be Reviewed :</Typography>
//             </Box>
            

//                <Box display="flex" justifyContent="center" mt={3}>
//             <Button variant="contained" color="inherit" sx={{ width: '100%', maxWidth: 400 ,backgroundColor:"white",color:"black"}} onClick={displayInstruction} >
//               Instructions
//             </Button>
//           </Box>
            
//             <Box display="flex" justifyContent="center" mt={3}>
//             <Button variant="contained" color="success" sx={{ width: '100%', maxWidth: 400 }} >
//               <Link to="/result" style={{textDecoration:"none",color:"black"}} >Finish Test</Link>
//             </Button>
//           </Box>
//           </Box>
          
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Paper elevation={3} sx={{ mb: 3, px: 4, py: 3 }}>
//           <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3 ,marginTop:"-1rem"}}>
//               <Tab label="Section 1" />
//               <Tab label="Section 2" />
//               <Tab label="Section 3" />
//               <Tab label="Section 4" />
//             </Tabs>
//             <QuestionDisplay currentQuestionIndex={currentQuestionIndex} /> {/* Pass currentQuestionIndex */}
//           </Paper>
//           <Box display="flex" justifyContent="center" mt={3}>
//               <Button variant="contained" color="warning" onClick={handlePreviousQuestion}>
//                 Previous
//               </Button>
//               <Button variant="contained" color="primary" onClick={handleNextQuestion}>
//                 Next
//               </Button>
//               <Button variant="contained" color="error">
//                 Clear Selection
//               </Button>
//             </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TestPage;



































































import React, { useState, useContext } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Tab,
  Tabs,
  AppBar,
  Container,
  Grid,
} from "@mui/material";
import QuestionNavigator from "../components/TestScreen/QuestionNavigator";
import QuestionDisplay from "../components/TestScreen/QuestionDisplay";
import TestTimer from "../components/TestScreen/TestTimer";
import { Link } from "react-router-dom";
import TestContext from '../Context/testContext';
import { styled } from '@mui/system';







const TestPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { currentQuestionIndex, questions, changeQuestionIndex, selectedAnswers, selectAnswer,getAnsweredCount, getNotAttemptedCount, getMarkedForReviewCount ,getQuestionsBySection} = useContext(TestContext);




  const CircleDiv = styled('div')({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aeb6bf',
    color:"white",
    display:"inline-block",
    textAlign:"center"

  });
 
 




  
  const currentQuestion = questions[currentQuestionIndex];

  const handleClearSelection = () => {
    selectAnswer(currentQuestion.id, undefined);
  };




  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    // Set the current question index to the first question of the new section
    const sectionQuestions = getQuestionsBySection(newValue + 1);
    changeQuestionIndex(0);
  };


  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      changeQuestionIndex(currentQuestionIndex + 1);
    }
      // if(currentQuestionIndex >= questions.length - 1){
      //   handleTabChange(null, 1);
      //   // changeQuestionIndex(alert("You have completed the questions from current section proceed to another section if available"))
      // }
    
    
  };


   // Function to determine if next button should be disabled
  //  const isNextButtonDisabled = () => {
  //   const sectionQuestions = getQuestionsBySection(currentTab + 1);
  //   return currentQuestionIndex === sectionQuestions.length - 1;
  // };



 // Disable next button if current question is the last question of the section
 const isLastQuestionInSection = currentQuestionIndex === questions.length - 1 || (currentTab < 4 && currentQuestionIndex === questions.filter(question => question.section === currentTab + 1).length - 1);



  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      changeQuestionIndex(currentQuestionIndex - 1);
    }
  };

 
  const displayInstruction = () => {
    alert("set up your instruction here");
  };

//camera frame display
  const [showCamera, setShowCamera] = useState(false);
const cameraFrame = ()=>{
 
    setShowCamera(!showCamera)
   
}

  return (
    <Container maxWidth="xl" sx={{ px: 0 }}>
      {/* AppBar and other components */}
      <Box mb={4}>
        <AppBar position="static" color="default">
          <Container maxWidth="xl">
            <Grid container alignItems="center" justifyContent="space-between" px={2}>
              <Grid item>
                <Typography variant="h5">Logo</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight={700}>
                  <TestTimer duration={1*60} />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
      <Grid container alignItems="stretch" >
      <Grid item xs={12} md={3} sx={{ backgroundColor: "#E2E5DE", maxHeight: "100vh" }}>
          <Box p={2}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Question Overview:
            </Typography>
            <Box sx={{
              maxHeight: 300,
              overflowY: "scroll",
              
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#0000FF",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#000066",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              },
            }}>
              <QuestionNavigator />
              
              
              
              {/* Add more QuestionNavigators here */}
            </Box>
            <Box mt={2}>
            <Typography variant="body1">No Of Questions Attempted :<CircleDiv style={{backgroundColor:"green"}}> {getAnsweredCount()}</CircleDiv></Typography>
              <Typography variant="body1">No Of Questions Not Attempted : <CircleDiv style={{backgroundColor:"red"}}>{getNotAttemptedCount()}</CircleDiv></Typography>
              <Typography variant="body1">No Of Questions To Be Reviewed : <CircleDiv style={{backgroundColor:"blue"}}>{getMarkedForReviewCount()}</CircleDiv></Typography>
            </Box>
            

               <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="inherit" sx={{ width: '100%', maxWidth: 400 ,backgroundColor:"white",color:"black"}} onClick={displayInstruction} >
              Instructions
            </Button>
          </Box>
            
            <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" color="success" sx={{ width: '100%', maxWidth: 400 }} >
              <Link to="/result" style={{textDecoration:"none",color:"black"}} >Finish Test</Link>
            </Button>
          </Box>
          </Box>
          
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ mb: 3, px: 4, py: 3 }}>
          <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3 ,marginTop:"-1rem"}}>
              <Tab label="Section 1" />
              <Tab label="Section 2" />
              <Tab label="Section 3" />
              <Tab label="Section 4" />
            </Tabs>
            <QuestionDisplay currentQuestionIndex={currentQuestionIndex} sectionNumber={currentTab + 1}/> {/* Pass currentQuestionIndex */}
          </Paper>
          <Box display="flex" justifyContent="center" mt={3} >
              <Button variant="contained" color="warning" onClick={handlePreviousQuestion}>
                Previous
              </Button>
              <Button variant="contained" color="primary" onClick={handleNextQuestion}  style={{margin:"0 1rem"}} disabled={isLastQuestionInSection}>
                Next
              </Button>
              <Button variant="contained" color="error"  onClick={handleClearSelection}>
                Clear Selection
              </Button>
            </Box>
            </Grid>
            <Grid item md={2} >
            <Box display='flex' justifyContent="center" alignItems="center" marginLeft={1}>
            
            <Typography variant="p" color="black"> View Frame  
            <Button color="primary" onClick={cameraFrame}> Icon</Button>

            {showCamera && (
        <div
          style={{
            width: '10rem',
            height: '10rem',
            backgroundColor: 'black',
            margin: '1rem',
            color:"white"
          }}
        >camera frame yaha display krlo bhaiya agr chaiye toh size badha lo aur margin km krlo</div>
      )}
            </Typography>
            
            </Box>
            <Box display='flex' justifyContent="center" alignItems="center"  marginLeft={1}>
            
            <Typography variant="p" color="black"> Get Help  <Button color="primary"> Icon</Button></Typography>
            
            </Box>
              
            </Grid>
            </Grid>
    </Container>
  );
};

export default TestPage;
