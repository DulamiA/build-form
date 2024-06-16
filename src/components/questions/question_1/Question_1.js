import React, { useState } from "react";
import "./Question_1.css";

const Question_1 = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const handleSubmit = () => {
        if (!validateInput(firstName)) {
            setFirstNameError(true);
            alert("Please enter a valid first name");
            return;
        }

        if (!validateInput(lastName)) {
            setLastNameError(true);
            alert("Please enter a valid last name");
            return;
        }

        if (firstName.trim() === "" || lastName.trim() === "") {
            alert("Please enter your first and last name");

        } else {
            console.log("First Name: ", firstName);
            console.log("Last Name: ", lastName);
            onSubmit();
        }

    };

    const validateInput = (input) => {
        const regex = /^[A-Za-z]+$/;
        return regex.test(input);
    };

    return (
        <div className="question-wrapper-1">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">1</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <span className="text-wrapper">
                    <label htmlFor="first-name" className="text-title">
                        <span>Before we start, what is your name?</span>
                    </label>
                </span>
            </div>

            <div className="input-wrapper">
                <label htmlFor="first-name" className="text-wrapper">First name</label>
                <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    placeholder="Jane"
                    className="input-field"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="last-name" className="text-wrapper">Last name</label>
                <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    placeholder="Smith"
                    className="input-field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
}

export default Question_1;
