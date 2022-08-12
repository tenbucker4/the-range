import React, { Component, useState } from "react";
import "../styles/Shop.css";
import "../styles/App.css";

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "dark",
        };
    }

    componentDidMount() {
        document.querySelector(".app-title").style.color = "black";
        document.getElementById("search-icon").style.fill = "black";
        document.getElementById("cart-icon").style.fill = "black";
    }

    componentWillUnmount() {
        document.querySelector(".app-title").style.color = "white";
        document.getElementById("search-icon").style.fill = "white";
        document.getElementById("cart-icon").style.fill = "white";
    }

    render() {
        return (
            <div className="shop-container">
                <div className="shop-wrapper">
                    <div className="shop-nav">
                        <h5>SHOP //</h5>
                        <h2>All Products</h2>
                        <ul>
                            <li>All</li>
                            <li>Drivers / Woods</li>
                            <li>Irons</li>
                            <li>Wedges</li>
                            <li>Putters</li>
                            <li>Balls</li>
                            <li>Gloves</li>
                        </ul>
                    </div>
                    <div className="shop-products">
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/taylormade-driver-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>TaylorMade Stealth Driver</h3>
                                <p>C$749.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/taylormade-driver-2.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>TaylorMade M2 Driver</h3>
                                <p>C$399.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/taylormade-wood-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>TaylorMade SIM2 Wood</h3>
                                <p>C$319.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/callaway-irons-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Callaway Apex Iron Set</h3>
                                <p>C$1959.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/titleist-irons.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Titleist T100S Iron Set</h3>
                                <p>C$1749.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/callaway-wedges-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Callaway JAWS RAW Wedge</h3>
                                <p>C$229.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/callaway-balls.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Callaway Chrome Soft X Balls</h3>
                                <p>C$63.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/titleist-balls-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Titleist Pro V1x Balls</h3>
                                <p>C$64.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/glove-1.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Callaway Tour Authentic Glove</h3>
                                <p>C$27.99</p>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-box">
                                <img
                                    src={require("../images/nike-glove.png")}
                                ></img>
                            </div>
                            <div className="product-description">
                                <h3>Nike Dura Feel IX Glove</h3>
                                <p>C$15.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
