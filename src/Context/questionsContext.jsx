import React from "react";
import { useContext, useReducer } from "react";
import { MARKED_QUESTIONS, REGISTER_STUDENT, SET_ACTUAL_ANSWERS, SET_QUESTION_LENGTH, STORE_ANSWERS, UPDATE_QNO } from "./actions";
import reducer from "./reducer";
import axios from 'axios';
import { addToLocalStorage, getFromLocalStorage } from "../utils/localStorage"; 




const initialState = {
    no_of_questions:0,
    current_qno:0,
    answers:[],
    marked_questions:[],
    actual_answers:[],
}

const TestContext = React.createContext();
const setQuestionLength = (l) =>{
    dispatch({type:SET_QUESTION_LENGTH,payload:{len: l}});
    addToLocalStorage('no_of_questions',l);
}

const updateAnswers=(ans)=>{
    dispatch({type:STORE_ANSWERS,payload:{ans: ans}});
    addToLocalStorage('answers',ans);
}

const updateMarked=(marked)=>{
    console.log('marked',marked)
    dispatch({type:MARKED_QUESTIONS,payload:{mark: marked}});
    addToLocalStorage('marked',marked);
}

const setActualAnswers=(actual)=>{
    dispatch({type:SET_ACTUAL_ANSWERS,payload:{actual}})
}

const updateQno = (qno) => {
    dispatch({type: UPDATE_QNO,payload:{qno}})
}