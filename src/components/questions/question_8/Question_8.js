import React from "react";
import { useState } from "react";
import "./Question_8.css";

const Question_8 = ({ onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: 'I accept', label: 'I accept' },
        { value: 'I don’t accept', label: 'I don’t accept' },
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Selected Option: ', selectedOption);
        onSubmit();
    };

    return (
        <div >
            <div className="header-wrapper-8">
                <div className="counter-content-8">
                    <span className="text-wrapper-8">8</span>
                    <span className="boundary-8">
                        <svg height="8" width="7" className="shouldFlipIfRtl-8">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper-8">
                    <label className="text-title-8">
                        Certifying Statement*
                    </label>
                </div>
            </div>
            <div >
                <p className="disclaimer-8">
                    I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
                </p>
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

            <div className="button-wrapper-8">
                <button onClick={handleSubmit}>Ok</button>
                <div className="helper-wrapper-8">
                    <div className="helper-text-8">
                        <span>press <strong>Enter ↵</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question_8;