import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, totalQuestions }) => {
    const navigate = useNavigate(); // Hook untuk navigasi

    const handleTryAgain = () => {
        // Navigasi kembali ke halaman awal
        navigate('/');
    };

    return (
        <div className="p-4 text-center">
            <h2 className="text-3xl font-bold">Quiz Completed</h2>
            <p className="text-lg mt-4">Your Score: {score} / {totalQuestions}</p>
            <button onClick={handleTryAgain} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Try Again
            </button>
        </div>
    );
};

export default Result;
