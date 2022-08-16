import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Shop.css";
import "../styles/App.css";

const Shop = (props) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categoryId } = useParams();
    const category = categories.find((category) => category.id === categoryId);

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
        <div className="shop-container">
            <div className="shop-wrapper">
                <div className="shop-nav">
                    <h5>SHOP //</h5>
                    <h2>All Products</h2>
                    <ul>
                        {categories?.map((category) => {
                            return <li key={category.id}>{category.name}</li>;
                        })}
                    </ul>
                </div>
                <div className="shop-products">
                    {allProducts?.map((item, i) => {
                        return (
                            <Link
                                className="product"
                                key={item.id}
                                to={`/shop/catalog/${item.id}`}
                                productid={item.id}
                            >
                                <div>
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
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Shop;
