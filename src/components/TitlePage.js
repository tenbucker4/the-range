import React, { Component, useState } from "react";
import "../styles/TitlePage.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

class TitlePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title-div">
                <h1>Welcome to The Range</h1>
                <h3>Please sign up to continue</h3>
                <SignUp />
                <p>Already have an account? Sign In</p>
                {/* <Link to="/shop/catalog">
                    <button type="button">ENTER</button>
                </Link> */}
            </div>
        );
    }
}

export default TitlePage;

// Photo by Will Porada (https://unsplash.com/@will0629) on Unsplash
