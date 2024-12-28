import {MARKED_QUESTIONS, SET_ACTUAL_ANSWERS, SET_QUESTION_LENGTH, STORE_ANSWERS, UPDATE_QNO } from "./actions"

const reducer = (state,action)=>{
    if(action.type === SET_QUESTION_LENGTH){
        return{
            ...state,
            no_of_questions:action.payload.len,
        }
    }
    if(action.type===MARKED_QUESTIONS){
        return{
            ...state,
            marked_questions:action.payload.mark,
        }
    }
    if(action.type===STORE_ANSWERS){
        return{
            ...state,
            answers:action.payload.ans,
        }
    }
    if(action.type === SET_ACTUAL_ANSWERS){
        return{
            ...state,
            actual_answers: action.payload.actual,
        }
    }
    if(action.type === UPDATE_QNO){
        return{
            ...state,
            current_qno : action.payload.qno
        }
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer;