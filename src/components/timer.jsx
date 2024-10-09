import React, { useEffect, useState } from 'react';

const Timer = ({ seconds, onTimeUp, resetTimer }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        // Reset timer ke 10 detik setiap kali `resetTimer` berubah
        setTimeLeft(seconds);
    }, [resetTimer, seconds]);

    useEffect(() => {
        if (timeLeft === 0) {
        onTimeUp();
        }

        const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    return (
        <div className="timer">
        <p>Time left: {timeLeft} seconds</p>
        </div>
    );
};

export default Timer;
