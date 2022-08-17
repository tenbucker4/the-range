import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Cart.css";

const Cart = (props) => {
    function hideCart() {
        document.querySelector(".cart").style.display = "none";
    }

    return (
        <div className="cart">
            <div className="cart-backdrop"></div>
            <div className="cart-container">
                <img
                    onClick={hideCart}
                    className="close-cart"
                    src={require("../images/close.png")}
                ></img>
                <h2 className="cart-title">Your Shopping Cart</h2>
                <div className="cart-item">
                    <div className="cart-item-image">
                        <img
                            src={require("../images/taylormade-driver-1.png")}
                        ></img>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-name">
                            TaylorMade Stealth Driver
                        </div>
                        <div className="cart-item-price">C$749.99</div>
                        <div className="cart-quantity-bin">
                            <img src={require("../images/minus.png")}></img>
                            <div className="cart-quantity-counter">1</div>
                            <img src={require("../images/plus.png")}></img>
                        </div>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
