import React, { useState } from "react";
import "../styles/Header.css";
import "../images/grid.png";

const Header = () => {
    return (
        <header>
            <div className="app-title">
                <a href="/">THE RANGE</a>
            </div>
            <ul>
                <li>
                    <a href="/shop">
                        <img src={require("../images/grid.png")} />
                    </a>
                </li>
                <li>
                    <a href="/search">
                        <img src={require("../images/search.png")} />
                    </a>
                </li>
                <li>
                    <a href="/cart">
                        <img src={require("../images/cart.png")} />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
