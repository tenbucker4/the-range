import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="app-title">
                    <Link to="/">
                        <div>THE RANGE</div>
                    </Link>
                </div>
                <ul>
                    <li onClick={this.props.showCart}>
                        <div className="cart-counter">
                            {this.props.cart.length}
                        </div>
                        <svg
                            id="cart-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
                        </svg>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
