import React from 'react';

const Result = ({ score, totalQuestions }) => {
    return (
        <div className="p-4 text-center">
        <h2 className="text-3xl font-bold">Quiz Completed</h2>
        <p className="text-lg mt-4">Your Score: {score} / {totalQuestions}</p>
        </div>
    );
};

export default Result;
