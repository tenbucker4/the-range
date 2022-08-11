import React, { useState } from "react";
import "../styles/Header.css";
import "../images/grid.png";

const Header = () => {
    return (
        <div className="home-page">
            <header>
                <div className="app-title">THE RANGE</div>
                <ul>
                    <li>
                        <img src={require("../images/grid.png")} />
                    </li>
                    <li>
                        <img src={require("../images/search.png")} />
                    </li>
                    <li>
                        <img src={require("../images/cart.png")} />
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
