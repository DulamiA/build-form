import React, { useState } from 'react';
import './Question_7.css';
import ImageUrl from '../../../img/q-7.png'

const Question_7 = ({ onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: '<$30,000', label: '<$30,000' },
        { value: '$30,000 - $50,000', label: '$30,000 - $50,000' },
        { value: '$50,000 - $80,000', label: '$50,000 - $80,000' },
        { value: '$80,000 - $120,000', label: '$80,000 - $120,000' },
        { value: '$120,000 - $250,000', label: '$120,000 - $250,000' },
        { value: '$250,000 or more', label: '$250,000 or more' }
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Selected Option: ', selectedOption);
        onSubmit();
    };

    return (
        <div className="question-container">
            <div className="left-side">
                <div className="header-wrapper">
                    <div className="counter-content">
                        <span className="text-wrapper">7</span>
                        <span className="boundary">
                            <svg height="8" width="7" className="shouldFlipIfRtl">
                                <path d="M5 3.5v1.001H-.002v-1z"></path>
                                <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="text-wrapper">
                        <label className="text-title">
                            What is your current annual compensation? (Optional)
                        </label>
                    </div>
                </div>
                <div >
                    <p className="disclaimer">
                        Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.
                    </p>
                </div>


                <div className="radio-group">
                    {options.map((option, index) => (
                        <div key={option.value} className="radio-option">
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name="compensation"
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor={`option-${index}`}>
                                <span>{String.fromCharCode(65 + index)}</span> {option.label}
                            </label>
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

            <div className="right-side">
                <img src={ImageUrl} alt="Related to compensation" className="image" />
            </div>

        </div>
    );
};

export default Question_7;
