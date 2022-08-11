import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../images/grid.png";

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

// const Header = (props) => {
//     const { displayShop } = props;

//     return (
//         <header>
//             <div className="app-title">
//                 <a href="/" style={{ color: this.props.headerColor }}>
//                     THE RANGE
//                 </a>
//             </div>
//             <ul>
//                 <li>
//                     <a href="/shop">
//                         <img src={require("../images/grid.png")} />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="/search">
//                         <img src={require("../images/search.png")} />
//                     </a>
//                 </li>
//                 <li>
//                     <a href="/cart">
//                         <img src={require("../images/cart.png")} />
//                     </a>
//                 </li>
//             </ul>
//         </header>
//     );
// };

export default Header;
