import React, { Component, useState } from "react";
import "../styles/TitlePage.css";
import { Link } from "react-router-dom";

class TitlePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title-div">
                <h1>Welcome to The Range</h1>
                <h3>The top destination for premium golf equipment</h3>
                <Link to="/shop/catalog">
                    <button type="button">ENTER</button>
                </Link>
            </div>
        );
    }
}

export default TitlePage;

// Photo by Will Porada (https://unsplash.com/@will0629) on Unsplash
