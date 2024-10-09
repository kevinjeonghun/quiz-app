import React from 'react';

const Question = ({ questionData, onAnswerSelect }) => {
    const { question, correct_answer, incorrect_answers } = questionData;
    const options = [...incorrect_answers, correct_answer].sort(() => 0.5 - Math.random());

    return (
        <div className="p-4">
        <h3 className="text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: question }}></h3>
        {options.map((option, index) => (
            <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
            onClick={() => onAnswerSelect(option)}
            >
            {option}
            </button>
        ))}
        </div>
    );
};

export default Question;
