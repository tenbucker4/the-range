import React, { Component } from "react";
import "../styles/TitlePage.css";
import { Link } from "react-router-dom";

class TitlePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title-div">
                <p>WELCOME TO</p>
                <h1>The Range</h1>
                <div className="hero-slogan">
                    Home of premium golf equipment
                </div>
                <Link to="/the-range/shop/catalog">
                    <button type="button">Tee-Off</button>
                </Link>
            </div>
        );
    }
}

export default TitlePage;

// Photo by Will Porada (https://unsplash.com/@will0629) on Unsplash
