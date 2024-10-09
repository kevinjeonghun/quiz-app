import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username) {
        localStorage.setItem('username', username);
        navigate('/quiz');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Welcome to Quiz App</h2>
        <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 my-4"
        />
        <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Start Quiz
        </button>
        </div>
    );
};

export default HomePage;
