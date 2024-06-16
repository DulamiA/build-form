
import React, { useState } from 'react';
import './Question_6.css';

const options = [
    {
        id: 'no-experience',
        value: 'no-experience',
        label: 'No experience (I have never programmed before.)'
    },
    {
        id: 'beginner',
        value: 'beginner',
        label: 'Beginner (I have played with some introductory coding lessons and tutorials.)'
    },
    {
        id: 'intermediate',
        value: 'intermediate',
        label: 'Intermediate (I have completed some coding classes or tutorials.)'
    },
    {
        id: 'advanced',
        value: 'advanced',
        label: 'Advanced (I can build applications.)'
    },
    {
        id: 'professional',
        value: 'professional',
        label: 'Professional (I am an experienced software engineer.)'
    }
];

const Question_6 = ({ onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Selected Option: ', selectedOption);
        onSubmit();
    };

    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">6</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">How would you describe your current level of coding experience?</span>
                    </label>
                </div>
            </div>

            <div className="radio-group">
                {options.map(option => (
                    <div className="radio-option" key={option.id}>
                        <input
                            type="radio"
                            id={option.id}
                            name="coding-experience"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>

            <div className="button-wrapper">
                <button onClick={handleSubmit}>OK</button>
                <div className="helper-wrapper">
                    <div className="helper-text">
                        <span>press <strong>Enter ↵</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question_6;
