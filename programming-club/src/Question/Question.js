import React from 'react';

const Question = (props) => {
    console.log(props);
    const { question, ans } = props.question
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl h-96">
                <div className="card-body">
                    <h2 className="card-title">{question}</h2>
                    <p>{ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Question;