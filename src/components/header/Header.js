import React from "react";
import "./Header.css";
import logoImage from "../../img/header-logo.png";

const Header = () => {
    return (
        <div className="header logo">
            <img src={logoImage} alt="Logo" />
        </div>
    );
};

export default Header;
