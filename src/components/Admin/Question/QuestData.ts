export type Questions = {
    id: number;
    section: string;
    topic: string;
    type: string;
    difficultylevel: string;
    questions: string;
    optiona:string;
    optionb:string;
    optionc:string;
    optiond:string;
  };
  
  export const data = [
    {
      id: 1,
      section: 'General Knowledge',
      topic: 'GK',
      type: 'Single Correct',
      difficultylevel: 'Easy',
      questions: 'What is the capital of Australia?',
      optiona:'Sydney',
      optionb:'Melbourne',
      optionc:'Canberra',
      optiond:'Perth'
    },
    {
      id:2,
      section:'General Knowledge',
      topic:'GK',
      type:'Multiple Correct',
      difficultylevel:'Easy',
      questions:'Who painted the Mona Lisa?',
      optiona:'Vincent van Gogh',
      optionb:'Pablo Picasso',
      optionc:'Leonarda da Vinci',
      optiond:'Michelangelo'
    },
    {
      id: 3,
      section: 'General Knowledge',
      topic: 'GK',
      type: 'Single Correct',
      difficultylevel: 'Easy',
      questions: 'What is the capital of Australia?',
      optiona:'Sydney',
      optionb:'Melbourne',
      optionc:'Canberra',
      optiond:'Perth'
    },
    {
      id:4,
      section:'General Knowledge',
      topic:'GK',
      type:'Multiple Correct',
      difficultylevel:'Easy',
      questions:'Who painted the Mona Lisa?',
      optiona:'Vincent van Gogh',
      optionb:'Pablo Picasso',
      optionc:'Leonarda da Vinci',
      optiond:'Michelangelo'
    },
    {
      id: 5,
      section: 'General Knowledge',
      topic: 'GK',
      type: 'Single Correct',
      difficultylevel: 'Easy',
      questions: 'What is the capital of Australia?',
      optiona:'Sydney',
      optionb:'Melbourne',
      optionc:'Canberra',
      optiond:'Perth'
    },
    {
      id:6,
      section:'General Knowledge',
      topic:'GK',
      type:'Multiple Correct',
      difficultylevel:'Easy',
      questions:'Who painted the Mona Lisa?',
      optiona:'Vincent van Gogh',
      optionb:'Pablo Picasso',
      optionc:'Leonarda da Vinci',
      optiond:'Michelangelo'
    },
    {
      id: 7,
      section: 'General Knowledge',
      topic: 'GK',
      type: 'Single Correct',
      difficultylevel: 'Easy',
      questions: 'What is the capital of Australia?',
      optiona:'Sydney',
      optionb:'Melbourne',
      optionc:'Canberra',
      optiond:'Perth'
    },
] as Questions[];