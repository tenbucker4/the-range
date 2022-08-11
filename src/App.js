import "./styles/App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";

const App = () => {
    return (
        <div className="main-container">
            <Header />
            <TitlePage />
        </div>
    );
};

export default App;
