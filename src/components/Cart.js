import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Cart.css";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart-backdrop"></div>
            <div className="cart-container">
                <img
                    className="close-cart"
                    src={require("../images/close.png")}
                ></img>
                <h2 className="cart-title">Your Shopping Cart</h2>
            </div>
        </div>
    );
};

export default Cart;
