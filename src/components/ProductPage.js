import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";

import categories from "../products/categories";
import "../styles/ProductPage.css";
import uniqid from "uniqid";

const ProductPage = ({ addItemToCart }) => {
    const { productId } = useParams();
    const [count, setCount] = useState(["1"]);
    const product = allProducts.find((product) => product.id === productId);

    const countUp = () => {
        setCount(parseInt(count) + parseInt(1));
    };

    const countDown = () => {
        if (count == 1) {
            return;
        } else {
            setCount(count - 1);
        }
    };

    const moveSliderLeft = () => {
        const slider = document.querySelector(".slider");
        const sliderIndex = parseInt(
            getComputedStyle(slider).getPropertyValue("--slider-index")
        );

        if (sliderIndex <= 0) {
            slider.style.setProperty("--slider-index", 2);
        } else {
            slider.style.setProperty("--slider-index", sliderIndex - 1);
        }
    };

    const moveSliderRight = () => {
        const slider = document.querySelector(".slider");
        const sliderIndex = parseInt(
            getComputedStyle(slider).getPropertyValue("--slider-index")
        );

        if (sliderIndex >= 2) {
            slider.style.setProperty("--slider-index", 0);
        } else {
            slider.style.setProperty("--slider-index", sliderIndex + 1);
        }
    };

    useEffect(() => {
        document.querySelector(".app-title").style.color = "black";
        document.querySelector(".cart-counter").style.color = "black";
        document.getElementById("cart-icon").style.fill = "black";

        return () => {
            document.querySelector(".app-title").style.color = "white";
            document.querySelector(".cart-counter").style.color = "white";
            document.getElementById("cart-icon").style.fill = "white";
        };
    });

    return (
        <div className="product-page-container">
            <div className="product-page-wrapper">
                <div className="product-page-description">
                    <Link to="/shop/catalog">
                        <img src={require("../images/arrow-left.png")}></img>
                    </Link>
                    <div className="prod-name">{product.name}</div>
                </div>
                <div className="product-page-box">
                    <img
                        className="prod-image"
                        src={require(`../images/${product.image}`)}
                    ></img>
                </div>
                <div className="add-to-cart-bin">
                    <div className="price">C${product.price}</div>
                    <div className="quantity-bin">
                        <img
                            src={require("../images/minus.png")}
                            onClick={countDown}
                        ></img>
                        <div className="quantity-counter">{count}</div>
                        <img
                            src={require("../images/plus.png")}
                            onClick={countUp}
                        ></img>
                    </div>
                    <button
                        onClick={() =>
                            addItemToCart(
                                product.name,
                                product.image,
                                product.price,
                                count
                            )
                        }
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="related-products">
                <h4>Browse Other Products</h4>
                <div className="slider-container">
                    <div
                        className="handle handle-left"
                        onClick={moveSliderLeft}
                    >
                        <img src={require("../images/chevron-left.png")}></img>
                    </div>
                    <div className="slider">
                        {allProducts
                            .filter((item) => item.name !== product.name)
                            .map((otherProducts) => (
                                <Link
                                    className="box"
                                    key={otherProducts.id}
                                    to={`/shop/catalog/${otherProducts.id}`}
                                    productid={otherProducts.id}
                                >
                                    <img
                                        src={require(`../images/${otherProducts.image}`)}
                                    ></img>
                                    <p>{otherProducts.name}</p>
                                </Link>
                            ))}
                    </div>
                    <div
                        className="handle handle-right"
                        onClick={moveSliderRight}
                    >
                        <img src={require("../images/chevron-right.png")}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
