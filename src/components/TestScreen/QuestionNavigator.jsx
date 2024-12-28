// import React, { useContext } from 'react';
// import TestContext from '../../Context/testContext';
// import { IconButton, Tooltip } from '@mui/material';
// import { styled } from '@mui/system';

// const CircleDiv = styled('div')({
//   width: '24px',
//   height: '24px',
//   borderRadius: '50%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#aeb6bf',
//   color:"black"
// });

// const QuestionNavigator = () => {
//   const {
//     questions,
//     selectedAnswers,
//     markedForReview,
//   } = useContext(TestContext);

//   const getStatusColor = (questionId) => {
//     if (markedForReview[questionId]) {
//       return 'darkblue'; // Question is marked for review
//     } else if (selectedAnswers[questionId] !== undefined) {
//       return 'green'; // Question is answered
//     } else if (selectedAnswers[questionId] === undefined) {
//       return '#F5FEFD'; // Question is unanswered
//     } else {
//       return 'black'; // Question is unvisited
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '.7rem' }}>
//   {questions.map((question, index) => (
//     <Tooltip key={question.id} title={`Question ${index + 1}`} arrow>
//       <IconButton>
//         <CircleDiv style={{ backgroundColor: getStatusColor(question.id), fontSize: '15px' }}>
//           {index + 1} {/* Question number as the child */}
//         </CircleDiv>
//       </IconButton>
//     </Tooltip>
//   ))}
// </div>

//   );
// };

// export default QuestionNavigator;












// import React, { useContext } from 'react';
// import TestContext from '../../Context/testContext';
// import { IconButton, Tooltip } from '@mui/material';
// import { styled } from '@mui/system';

// const CircleDiv = styled('div')({
//   width: '24px',
//   height: '24px',
//   borderRadius: '50%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#aeb6bf',
//   color:"pink "
// });

// const QuestionNavigator = () => {
//   const { questions, selectedAnswers, markedForReview, changeQuestionIndex } = useContext(TestContext);

//   const getStatusColor = (questionId) => {
//     if (markedForReview[questionId]) {
//       return 'darkblue'; // Question is marked for review
//     } else if (selectedAnswers[questionId] !== undefined) {
//       return 'green'; // Question is answered
//     } else if (selectedAnswers[questionId] === undefined) {
//       return '#F5FEFD'; // Question is unanswered
//     } else {
//       return 'black'; // Question is unvisited
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '.7rem' }}>
//       {questions.map((question, index) => (
//         <Tooltip key={question.id} title={`Question ${index + 1}`} arrow>
//           <IconButton onClick={() => changeQuestionIndex(index)}>
//             <CircleDiv style={{ backgroundColor: getStatusColor(question.id), fontSize: '15px' }}>
//               {index + 1}
//             </CircleDiv>
//           </IconButton>
//         </Tooltip>
//       ))}
//     </div>
//   );
// };

// export default QuestionNavigator;






import React, { useContext } from 'react';
import TestContext from '../../Context/testContext';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/system';

const CircleDiv = styled('div')({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#aeb6bf',
  color:"white",
  marginBottom: '0.5rem'

});

const QuestionNavigator = () => {
  const {
    questions,
    selectedAnswers,
    markedForReview,
    changeQuestionIndex,
    toggleMarkForReview,
    getQuestionsBySection
  } = useContext(TestContext);

  const getStatusColor = (questionId) => {
    if (markedForReview[questionId]) {
      return 'darkblue'; // Question is marked for review
    } else if (selectedAnswers[questionId] !== undefined) {
      return 'green'; // Question is answered
    } else if (selectedAnswers[questionId] === undefined) {
      return 'grey'; // Question is unanswered
    } else {
      return 'black'; // Question is unvisited
    }
  };

  // Function to get the count of questions in each section
  const getQuestionCountBySection = (sectionNumber) => {
    const sectionQuestions = getQuestionsBySection(sectionNumber);
    return sectionQuestions.length;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '.7rem' }}>
    {/* Map through sections */}
    {[1, 2, 3, 4].map(section => (
      <div key={section}>
        {/* Section heading */}
        <h3>Section {section}</h3>
        {/* Map through questions within the section */}
        {getQuestionsBySection(section).map((question, index) => (
          <Tooltip key={question.id} title={`Question ${index + 1}`} arrow>
            <IconButton onClick={() => changeQuestionIndex(index)} onDoubleClick={() => toggleMarkForReview(question.id)}>
              <CircleDiv style={{ backgroundColor: getStatusColor(question.id), fontSize: '15px' }}> {index + 1} {/* Question number as the child */}</CircleDiv>
            </IconButton>
          </Tooltip>
        ))}
      </div>
    ))}
    </div> 
  );
};

export default QuestionNavigator;


//  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '.7rem' }}>
// {/* Map through sections */}
// {[1, 2, 3, 4].map(section => (
//   <div key={section}>
//     {/* Section heading */}
//     <h3>Section {section}</h3>
//     {/* Map through questions within the section */}
//     {getQuestionsBySection(section).map((question, index) => (
//       <Tooltip key={question.id} title={`Question ${index + 1}`} arrow>
//         <IconButton onClick={() => changeQuestionIndex(index)} ondblClick={() => toggleMarkForReview(question.id)}>
//           <CircleDiv style={{ backgroundColor: getStatusColor(question.id), fontSize: '15px' }}> {index + 1} {/* Question number as the child */}</CircleDiv>
//         </IconButton>
//       </Tooltip>
//     ))}
//   </div>
// ))}
// </div> 
// );
// }; 