import React, { useState } from 'react';
import Question_1 from '../questions/question_1/Question_1.js';
import Question_2 from '../questions/question_2/Question_2.js';
import Question_3 from '../questions/question_3/Question_3.js';
import Question_4 from '../questions/question_4/Question_4.js';
import Question_5 from '../questions/question_5/Question_5.js';
import Question_6 from '../questions/question_6/Question_6.js';
import Question_7 from '../questions/question_7/Question_7.js';
import Question_8 from '../questions/question_8/Question_8.js';
import Question_9 from '../questions/question_9/Question_9.js';
import './Questionnaire.css';

function Questionnaire() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const totalQuestions = 9;

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handleQuestion1Submit = () => {
        setCurrentQuestion(1);
    }

    const handleQuestion2Submit = () => {
        setCurrentQuestion(2);
    }

    const handleQuestion3Submit = () => {
        setCurrentQuestion(3);
    }

    const handleQuestion4Submit = () => {
        setCurrentQuestion(4);
    }

    const handleQuestion5Submit = () => {
        setCurrentQuestion(5);
    }

    const handleQuestion6Submit = () => {
        setCurrentQuestion(6);
    }

    const handleQuestion7Submit = () => {
        setCurrentQuestion(7);
    }

    const handleQuestion8Submit = () => {
        setCurrentQuestion(8);
    }

    const handleQuestion9Submit = () => {
        alert('Successfully submitted!');
    }


    return (
        <div className="questionnaire-container">

            {currentQuestion === 0 && <Question_1 onSubmit={handleQuestion1Submit} />}
            {currentQuestion === 1 && <Question_2 onSubmit={handleQuestion2Submit} />}
            {currentQuestion === 2 && <Question_3 onSubmit={handleQuestion3Submit} />}
            {currentQuestion === 3 && <Question_4 onSubmit={handleQuestion4Submit} />}
            {currentQuestion === 4 && <Question_5 onSubmit={handleQuestion5Submit} />}
            {currentQuestion === 5 && <Question_6 onSubmit={handleQuestion6Submit} />}
            {currentQuestion === 6 && <Question_7 onSubmit={handleQuestion7Submit} />}
            {currentQuestion === 7 && <Question_8 onSubmit={handleQuestion8Submit} />}
            {currentQuestion === 8 && <Question_9 onSubmit={handleQuestion9Submit} />}

            {/* Fixed footer with Prev and Next buttons */}
            <div className="footer">
                <button onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
                <button onClick={handleNext} disabled={currentQuestion === totalQuestions - 1}>Next</button>
            </div>
        </div>
    );
}

export default Questionnaire;
