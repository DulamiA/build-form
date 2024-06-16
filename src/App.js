import React from "react";
import Questionnaire from "./components/questionnaire/Qustionnaire.js";
import Header from "./components/header/Header.js";
import "./App.css";
//import footer-area from "./components/Footer";
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <Header />
      <Questionnaire />
      {/* <footer-area />  */}
    </div>
  );
}

export default App;
