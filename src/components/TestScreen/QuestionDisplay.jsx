// import React, { useContext } from 'react';
// import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
// import { TestContext } from '../../Context/testContext';

// const QuestionDisplay = () => {
//   const { questions, currentQuestionIndex, selectedAnswers, selectAnswer } = useContext(TestContext);
//   const currentQuestion = questions[currentQuestionIndex];

//   const handleChange = (event) => {
//     selectAnswer(currentQuestion.id, event.target.value);
//   };

//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">
//         <Typography fontWeight={700}>Question {currentQuestionIndex + 1} :</Typography>
//         <Typography
//           display='flex'
//           flexWrap='wrap'
//           fontWeight={550}
//           sx={{
//             wordWrap: 'break-word',
//             maxWidth: '400px',
//           }}
//         >
//           {currentQuestion?.text}
//         </Typography>
//       </FormLabel>
//       <RadioGroup name={`question_${currentQuestionIndex}`} value={selectedAnswers[currentQuestion.id] || ''} onChange={handleChange}>
//         {currentQuestion?.options.map((option, idx) => (
//           <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
//         ))}
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default QuestionDisplay;




















import React, { useContext } from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';
import TestContext from '../../Context/testContext';

const QuestionDisplay = ({ sectionNumber }) => {
  const { questions, currentQuestionIndex, selectedAnswers, selectAnswer ,markQuestionForReview, markedForReview,getQuestionsBySection} = useContext(TestContext);

  const filteredQuestions = getQuestionsBySection(sectionNumber); // Filter questions by section
  const currentQuestion = filteredQuestions[currentQuestionIndex]; // Use filtered questions

  
  const handleMarkForReview = () => {
    markQuestionForReview(currentQuestion.id);
  };


  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Typography fontWeight={700}>Question {currentQuestionIndex + 1} :</Typography>
        <Typography
          display='flex'
          flexWrap='wrap'
          fontWeight={550}
          sx={{
            wordWrap: 'break-word',
            maxWidth: '400px',
          }}
        >
          {currentQuestion?.text}
        </Typography>
      </FormLabel>
      <RadioGroup name={`question_${currentQuestionIndex}`} value={selectedAnswers[currentQuestion.id]} onChange={(e) => selectAnswer(currentQuestion.id, e.target.value)}>
        {currentQuestion?.options.map((option, idx) => (
          <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
      <Button variant="outlined" color="primary" onClick={handleMarkForReview}>
        {markedForReview[currentQuestion.id] ? "Unmark for Review" : "Mark for Review"}
      </Button>
      
    </FormControl>
  );
};

export default QuestionDisplay;

