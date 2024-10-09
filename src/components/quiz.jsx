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

    useEffect(() => {
        const loadQuiz = async () => {
        const quizData = await fetchQuiz();
        setQuestions(quizData);
        };
        loadQuiz();
    }, []);

    const handleAnswerSelect = (answer) => {
        if (questions[currentQuestion].correct_answer === answer) {
        setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        } else {
        setShowResult(true);
        }
    };

    const handleTimeUp = () => {
        setShowResult(true);
    };

    if (showResult) {
        return <Result score={score} totalQuestions={questions.length} />;
    }

    return (
        <div className="container mx-auto p-4">
        {questions.length > 0 && (
            <>
            <Timer seconds={timer} onTimeUp={handleTimeUp} />
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
