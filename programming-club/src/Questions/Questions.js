import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import './Questions.css'


const Questions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch('questions.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, []);

    return (
        <div className='p-3'>
            <p className='text-center text-3xl font-bold mb-6'>Questions</p>
            <div className='questions'>
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>


        </div>
    );
};

export default Questions;