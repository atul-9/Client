import React from 'react'
import { useLocation } from 'react-router-dom';
import { useTextContext } from '../../Context/testContext';

const Results = () => {
    const {actual_answers} = useTextContext();
    const location = useLocation();
    const answers = location.state.ans;
    const actual = actual_answers;
    
    const answered=answers.filter(function(value){
        return value!=='';
    });
    
    const score = answers.filter(function(value,index){
        return value === actual[index];
    });
  return (
    <div>
        {/* <Navbar /> */}
        <div className='container py-4'>
            <h2 className='text-center'>Results</h2>
            <div className='card p-4'>
            <p>Answered Questions: {answered.length}</p>
            <p>Unanswered Questions: {actual.length-answered.length}</p>
            <p>Score:{score.length}</p>
            </div>
        </div>
    </div>
  )
}

export default Results