import React, { useState } from "react";
import "./Question_2.css";

const Question_2 = ({ onSubmit }) => {

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = () => {

        if (!validateEmail(email)) {
            setEmailError(true);
            alert("Please enter a valid email address");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email address");
        } else {
            console.log("E-mail: ", email);
            onSubmit();
        }
    }

    const validateEmail = (input) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(input);
    };

    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">2</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">What's your email address?</span>
                    </label>
                </div>
            </div>
            <div>
                <span className="sub-helper-text-2">
                    This is how we'll contact you.
                </span>
            </div>

            <div className="input-wrapper">
                <input
                    id="first-name"
                    type="email"
                    name="e-mail"
                    placeholder="name@example.com"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
        </div >
    );
}

export default Question_2;