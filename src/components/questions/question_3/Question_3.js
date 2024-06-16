import React, { useState } from "react";
import "./Question_3.css";

const Question_3 = ({ onSubmit }) => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const countries = [
        "Select Country",
        "United States",
        "Canada",
        "United Kingdom",
        "Germany",
        "France",
        "Australia",
        "Japan",
        "China",
        "India",
        "Brazil",
        "Mexico",
        "South Africa",
        "Sri Lanka",
        "Other"
    ];

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Country: ", selectedCountry);
        onSubmit();
    }


    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">3</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">Which country you are from? 🏡🏡🏡</span>
                    </label>
                </div>
            </div>

            <div className="input-wrapper">
                <select
                    id="country-select"
                    className="input-field"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                <input
                    id="custom-country-input"
                    type="text"
                    className="input-field"
                    placeholder="Type your country here"
                    value={selectedCountry}
                    onChange={handleCountryChange}
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
};

export default Question_3;
