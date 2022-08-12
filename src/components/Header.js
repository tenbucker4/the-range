import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../images/grid.png";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "dark",
        };
    }

    render() {
        return (
            <header>
                <div className="app-title">
                    <Link to="/">
                        <div onClick={this.props.changeColor}>THE RANGE</div>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/shop">
                            <img src={require("../images/grid.png")} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <img src={require("../images/search.png")} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <img src={require("../images/cart.png")} />
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
