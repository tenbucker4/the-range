import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Cart.css";
import RouteSwitch from "../RouteSwitch";

const Cart = ({
    cart,
    hideCart,
    total,
    addCartQuantity,
    decreaseCartQuantity,
}) => {
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
                {cart.length > 0 &&
                    cart?.map((item, i) => {
                        return (
                            <div key={i} className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                        src={require(`../images/${item.image}`)}
                                    ></img>
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-name">
                                        {item.name}
                                    </div>
                                    <div className="cart-item-price">{`C$${item.price}`}</div>
                                    <div className="cart-quantity-bin">
                                        <img
                                            src={require("../images/minus.png")}
                                            onClick={() =>
                                                decreaseCartQuantity(
                                                    i,
                                                    item.quantity,
                                                    item.id
                                                )
                                            }
                                        ></img>
                                        <div className="cart-quantity-counter">
                                            {item.quantity}
                                        </div>
                                        <img
                                            onClick={() => addCartQuantity(i)}
                                            src={require("../images/plus.png")}
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                {cart.length == 0 && <p>Your cart is empty</p>}
                <div className="total">{`Subtotal: C$${total}`}</div>

                <button>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
