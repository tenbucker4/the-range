import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/ProductPage.css";

const ProductPage = (props) => {
    const { productId } = useParams();
    const [count, setCount] = useState([1]);
    const product = allProducts.find((product) => product.id === productId);

    useEffect(() => {
        document.querySelector(".app-title").style.color = "black";
        document.getElementById("search-icon").style.fill = "black";
        document.getElementById("cart-icon").style.fill = "black";

        return () => {
            document.querySelector(".app-title").style.color = "white";
            document.getElementById("search-icon").style.fill = "white";
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
                    <div>{product.name}</div>
                </div>
                <div className="product-page-box">
                    <img src={require(`../images/${product.image}`)}></img>
                </div>
                <div className="add-to-cart-bin">
                    <div>C${product.price}</div>
                    <div className="quantity-bin">
                        <img src={require("../images/minus.png")}></img>
                        <div className="quantity-counter">{count}</div>
                        <img src={require("../images/plus.png")}></img>
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
