import React, { useState } from "react";
import "./Question_9.css";

const Question_9 = ({ onSubmit }) => {

    const [linkedinUrl, setlinkedinUrl] = React.useState("");

    const handleSubmit = () => {
        if (linkedinUrl.trim() === "") {
            alert("Please enter your LinkedIn URL");
        } else {
            console.log("Linkedin-Url: ", linkedinUrl);
            onSubmit();
        }
    }

    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">9</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">LinkedIn URL (optional)</span>
                    </label>
                </div>
            </div>
            <div>
                <span className="sub-helper-text">
                    Here's a sniper link to make your life easy - linkedin.com (It'll open in a new tab) 🚀
                </span>
            </div>

            <div className="input-wrapper">
                <input
                    id="first-name"
                    type="email"
                    name="e-mail"
                    placeholder="Type your answer here ..."
                    className="input-field"
                    value={linkedinUrl}
                    onChange={(e) => setlinkedinUrl(e.target.value)}
                />
            </div>

            <div className="button-wrapper">
                <button onClick={handleSubmit}>
                    Submit
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

export default Question_9;