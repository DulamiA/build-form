import React, { useState } from "react";
import "./Question_5.css";

const Question_5 = ({ onSubmit }) => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const languages = [
        { id: "A", name: "Solidity" },
        { id: "B", name: "Rust" },
        { id: "C", name: "Node.js" },
        { id: "D", name: "Typescript" },
        { id: "E", name: "Javascript" },
        { id: "F", name: "C" },
        { id: "G", name: "C++" },
        { id: "H", name: "C#" },
        { id: "I", name: "SQL" },
        { id: "J", name: "Python" },
        { id: "K", name: "Assembly Language" },
        { id: "L", name: "Haskell" },
        { id: "M", name: "R" },
        { id: "N", name: ".NET" },
        { id: "O", name: "Other" }
    ];

    const toggleSelection = (languageId) => {
        if (selectedLanguages.includes(languageId)) {
            setSelectedLanguages(selectedLanguages.filter(id => id !== languageId));
        } else {
            setSelectedLanguages([...selectedLanguages, languageId]);
        }
    };

    const handleSubmit = () => {
        console.log("Selected languages: ", selectedLanguages);
        onSubmit();
    };

    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">5</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">What languages and frameworks are you familiar with?</span>
                    </label>
                </div>
            </div>
            <div>
                <span className="sub-helper-text">
                    Select all the languages you know.
                </span>
            </div>

            <div className="grid-wrapper">
                {languages.map((lang) => (
                    <label key={lang.id} className="checkbox-label">
                        <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={selectedLanguages.includes(lang.id)}
                            onChange={() => toggleSelection(lang.id)}
                        />
                        <span className="checkbox-text">{lang.name}</span>
                    </label>
                ))}
            </div>

            <div className="button-wrapper">
                <button onClick={handleSubmit}>
                    OK
                </button>
                <div className="helper-wrapper">
                    <div className="helper-text">
                        <span>press <strong>Enter ↵</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question_5;
