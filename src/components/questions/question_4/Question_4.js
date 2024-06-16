import React, { useState } from "react";
import "./Question_4.css";

const Question_4 = ({ onSubmit }) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const countryCodes = [
        { code: "+1", country: "United States" },
        { code: "+44", country: "United Kingdom" },
        { code: "+49", country: "Germany" },
        { code: "+33", country: "France" },
        { code: "+81", country: "Japan" },
        { code: "+86", country: "China" },
        { code: "+91", country: "India" },
        { code: "+55", country: "Brazil" },
        { code: "+52", country: "Mexico" },
        { code: "+27", country: "South Africa" },
        { code: "+61", country: "Australia" },
        { code: "+94", country: "Sri Lanka" },
        { code: "+1", country: "Canada" }
    ];

    const handleCountryCodeChange = (event) => {
        setSelectedCountryCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Country Code: ", selectedCountryCode);
        console.log("Phone Number: ", phoneNumber);
        onSubmit();
    };

    return (
        <div className="question-wrapper">
            <div className="header-wrapper">
                <div className="counter-content">
                    <span className="text-wrapper">4</span>
                    <span className="boundary">
                        <svg height="8" width="7" className="shouldFlipIfRtl">
                            <path d="M5 3.5v1.001H-.002v-1z"></path>
                            <path d="M4.998 4L2.495 1.477 3.2.782 6.416 4 3.199 7.252l-.704-.709z"></path>
                        </svg>
                    </span>
                </div>
                <div className="text-wrapper">

                    <label htmlFor="first-name" className="text-title">
                        <span className="title-text">What is your phone number?</span>
                    </label>
                </div>
            </div>

            <div className="input-wrapper">
                <select
                    id="country-code-select"
                    className="input-field"
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                >
                    <option value="">Select Country Code</option>
                    {countryCodes.map((codeObj, index) => (
                        <option key={index} value={codeObj.code}>{`${codeObj.country} (${codeObj.code})`}</option>
                    ))}
                </select>

                <input
                    id="phone-number-input"
                    type="tel"
                    className="input-field"
                    placeholder={selectedCountryCode ? `E.g. ${selectedCountryCode} 123456789` : "Please select country code"}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
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

export default Question_4;
