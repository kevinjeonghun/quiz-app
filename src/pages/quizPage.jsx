import React, { useState, useEffect } from 'react';
import { fetchQuiz } from '../api/quizApi';
import Timer from '../components/timer';
import Question from '../components/question';
import Result from '../components/result';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timer, setTimer] = useState(10); 
    const [isLoading, setIsLoading] = useState(true);
    const [resetTimer, setResetTimer] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadQuiz = async () => {
        try {
            const quizData = await fetchQuiz();
            setQuestions(quizData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };
        loadQuiz();
    }, []);

    const handleAnswerSelect = (answer) => {
        if (questions[currentQuestion].correct_answer === answer) {
        setScore(score + 1);
        }
        
        // Cek apakah pertanyaan terakhir sudah selesai
        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setResetTimer(!resetTimer); // Reset timer setiap kali pertanyaan baru dimulai
        } else {
        setShowResult(true);
        }
    };

    const handleTimeUp = () => {
        // Jika waktu habis, otomatis pindah ke soal berikutnya atau tampilkan hasil
        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setResetTimer(!resetTimer); // Reset timer setiap kali pertanyaan baru dimulai
        } else {
        setShowResult(true);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (showResult) {
        return <Result score={score} totalQuestions={questions.length} />;
    }

    return (
        <div className="container mx-auto p-4">
        {questions.length > 0 && (
            <>
            {/* Timer akan reset ke 10 detik setiap kali resetTimer berubah */}
            <Timer seconds={timer} onTimeUp={handleTimeUp} resetTimer={resetTimer} />
            <Question
                questionData={questions[currentQuestion]}
                onAnswerSelect={handleAnswerSelect}
            />
            </>
        )}
        </div>
    );
};

export default QuizPage;
