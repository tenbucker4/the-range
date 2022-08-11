import React, { useState } from "react";
import "../styles/TitlePage.css";

const TitlePage = () => {
    return (
        <div className="title-div">
            <h1>Welcome to The Range</h1>
            <h3>The top destination for premium golf equipment</h3>
            <a href="/shop">
                <button>ENTER</button>
            </a>
        </div>
    );
};

export default TitlePage;

// Photo by Will Porada (https://unsplash.com/@will0629) on Unsplash
