import React, { Component, useState } from "react";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Shop.css";
import "../styles/App.css";

class Shop extends Component {
    constructor(props) {
        super(props);
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
                            {categories?.map((category) => {
                                return (
                                    <li key={category.id}>{category.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="shop-products">
                        {allProducts?.map((item, i) => {
                            return (
                                <div key={i} className="product">
                                    <div className="product-box">
                                        <img
                                            src={require(`../images/${item.image}`)}
                                        ></img>
                                    </div>
                                    <div className="product-description">
                                        <h3>{item.name}</h3>
                                        <p>{`C$${item.price}`}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
