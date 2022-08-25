import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = ({
    cart,
    hideCart,
    total,
    addCartQuantity,
    decreaseCartQuantity,
    clearCart,
}) => {
    return (
        <div className="cart fade-in">
            <div className="cart-backdrop"></div>
            <div className="cart-container">
                <img
                    onClick={hideCart}
                    className="close-cart"
                    src={require("../images/close.png")}
                ></img>
                <h2 className="cart-title">Your Shopping Cart</h2>

                {/* Return a shopping cart item for each entry in the cart array in state */}
                {cart.length > 0 &&
                    cart?.map((item, i) => {
                        return (
                            <div key={i} className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                        src={require(`../images/${item.image}`)}
                                        alt={item.name}
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
                                            alt="subtract-quantity"
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
                                            alt="add-quantity"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                {/* Display if cart is empty and subtotal */}
                {cart.length == 0 && <p>Your cart is empty</p>}
                <div className="total">{`Subtotal: C$${total}`}</div>

                <Link to="/">
                    <button className="checkout" onClick={clearCart}>
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
