import React, { createContext, useState, useCallback } from 'react';

export const TestContext = createContext();

// Dummy data for questions
const dummyQuestions = [
  {
    id: 1,
    section: 1,
    text: 'What is React sushanat walunj is my name, and x=20 y=40? 1',
    options: ['Library', 'Framework', 'Language', 'All of the above'],
    correctAnswer: 'Library'
  },
  {
    id: 2,
    section: 1,
    text: 'Who maintains React 1',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
  {
    id: 3,
    section: 1,
    text: 'Who maintains React? 1',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
  {
    id: 4,
    section: 1,
    text: 'Who maintains React? 1',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
  {
    id: 5,
    section: 1,
    text: 'Who maintains React? 1',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
    
  {
    id: 6,
    section: 2,
    text: 'Who maintains React? 21',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
    {
      id: 7,
      section: 2,
      text: 'Who maintains React? 22',
      options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
      correctAnswer: 'Facebook'
    },
  {
    id: 8,
    section: 2,
    text: 'Who maintains React? 23',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
  {
    id: 9,
    section: 2,
    text: 'Who maintains React? 24',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
{
  id: 10,
  section: 2,
  text: 'Who maintains React? 25',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
  id: 11,
  section: 3,
  text: 'Who maintains React? 31',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
  {
    id: 12,
    section: 3,
    text: 'Who maintains React? 32',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
{
  id: 13,
  section: 3,
  text: 'Who maintains React? 33',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
  id: 14,
  section: 3,
  text: 'Who maintains React? 34',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
id: 15,
section: 3,
text: 'Who maintains React? 35',
options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
correctAnswer: 'Facebook'
},
{
  id: 16,
  section: 4,
  text: 'Who maintains React? 41',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
  {
    id: 17,
    section: 4,
    text: 'Who maintains React? 42',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
{
  id: 18,
  section: 4,
  text: 'Who maintains React? 43',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
  id: 19,
  section: 4,
  text: 'Who maintains React 44?',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
id: 20,
section: 4,
text: 'Who maintains React? 45',
options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
correctAnswer: 'Facebook'
},
{
  id: 21,
  section: 4,
  text: 'Who maintains React? 46',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
  {
    id: 22,
    section: 4,
    text: 'Who maintains React? 47',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook'
  },
{
  id: 23,
  section: 4,
  text: 'Who maintains React? 48',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
  id: 24,
  section: 4,
  text: 'Who maintains React 49?',
  options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
  correctAnswer: 'Facebook'
},
{
id: 25,
section: 4,
text: 'Who maintains React? 410',
options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
correctAnswer: 'Facebook'
},
  
  // Add more dummy questions as needed
];

export const TestProvider = ({ children }) => {
  // State for all questions fetched from the database
  const [questions, setQuestions] = useState(dummyQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // State for the current section of the test
  const [currentSection, setCurrentSection] = useState(1);

  // State for the answers selected by the user
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // State for whether a question has been marked for review
  const [markedForReview, setMarkedForReview] = useState({});

  // State for the timer
  const [timeRemaining, setTimeRemaining] = useState(null);




 
  




  // Function to select an answer
  const selectAnswer = useCallback((questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  }, []);


  const toggleMarkForReview = useCallback((questionId) => {
    setMarkedForReview((prevMarks) => ({
      ...prevMarks,
      [questionId]: !prevMarks[questionId]
    }));
  }, []);

  // Function to mark a question for review
  const markQuestionForReview = useCallback((questionId) => {
    setMarkedForReview((prevMarks) => ({
      ...prevMarks,
      [questionId]: !prevMarks[questionId] // Toggle the review status
    }));
  }, []);

  // Function to change the current section
  const changeSection = useCallback((sectionNumber) => {
    setCurrentSection(sectionNumber);
  }, []);

  // Function to handle the timer for the test
  const setTimer = useCallback((time) => {
    setTimeRemaining(time);
  }, []);

  // Function to change the current question index
  const changeQuestionIndex = useCallback((index) => {
    setCurrentQuestionIndex(index);
  }, []);


  // Function to calculate the number of answered questions
const getAnsweredCount = () => {
  return Object.keys(selectedAnswers).length;
};

// Function to calculate the number of questions not attempted
const getNotAttemptedCount = () => {
  return questions.length - getAnsweredCount();
};

// Function to calculate the number of questions marked for review
const getMarkedForReviewCount = () => {
  return Object.keys(markedForReview).filter((questionId) => markedForReview[questionId]).length;
};

// Function to filter questions based on section number
const getQuestionsBySection = (sectionNumber) => {
  return questions.filter(question => question.section === sectionNumber);
};

  // The value that will be passed down to the components using this context
  const contextValue = {
    questions,
    currentSection,
    currentQuestionIndex,
    selectedAnswers,
    markedForReview,
    timeRemaining,
    setQuestions,
    setCurrentSection,
    setSelectedAnswers,
    setMarkedForReview,
    setTimer,
    selectAnswer,
    markQuestionForReview,
    changeSection,
    changeQuestionIndex,
    getAnsweredCount,
    getNotAttemptedCount,
    getMarkedForReviewCount,
    getQuestionsBySection
    
  };

  return (
    <TestContext.Provider value={contextValue}>
      {children}
    </TestContext.Provider>
  );
};
export default TestContext;






// import React, { createContext, useState, useCallback } from 'react';

// export const TestContext = createContext();

// // Dummy data for questions
// const dummyQuestions = [
//   // Dummy questions data
// ];

// export const TestProvider = ({ children }) => {
//   const [questions, setQuestions] = useState(dummyQuestions);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentSection, setCurrentSection] = useState(1);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [markedForReview, setMarkedForReview] = useState({});
//   const [timeRemaining, setTimeRemaining] = useState(null);

//   const selectAnswer = useCallback((questionId, answer) => {
//     setSelectedAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: answer
//     }));
//   }, []);

//   const markQuestionForReview = useCallback((questionId) => {
//     setMarkedForReview((prevMarks) => ({
//       ...prevMarks,
//       [questionId]: !prevMarks[questionId] // Toggle the review status
//     }));
//   }, []);

//   // Other functions...

//   const contextValue = {
//     questions,
//     currentSection,
//     currentQuestionIndex,
//     selectedAnswers,
//     markedForReview,
//     timeRemaining,
//     setQuestions,
//     setCurrentSection,
//     setSelectedAnswers,
//     setMarkedForReview,
//     setTimeRemaining,
//     selectAnswer,
//     markQuestionForReview,
//     // Other functions...
//   };

//   return (
//     <TestContext.Provider value={contextValue}>
//       {children}
//     </TestContext.Provider>
//   );
// };
// export default TestContext;
