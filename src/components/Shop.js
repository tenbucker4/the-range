import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import "../styles/Shop.css";
import "../styles/App.css";

const Shop = (props) => {
    const [searchQuery, setSearchQuery] = useState("product");
    const { categoryId } = useParams();
    const category = categories.find((category) => category.id === categoryId);

    // Set search in state
    const setSearch = async (search) => {
        await setSearchQuery(`${search}`);
    };

    const checkSearchInput = (search) => {
        if (search == "") {
            setSearchQuery("product");
        } else {
            setSearchQuery(search);
        }
    };

    // Change header color when Shop is mounted/unmounted
    useEffect(() => {
        document.querySelector(".app-title").style.color = "black";
        document.getElementById("cart-icon").style.fill = "black";
        document.querySelector(".cart-counter").style.color = "black";

        return () => {
            document.querySelector(".app-title").style.color = "white";
            document.getElementById("cart-icon").style.fill = "white";
            document.querySelector(".cart-counter").style.color = "white";
        };
    });

    return (
        <div className="shop-container">
            <div className="shop-wrapper">
                <div className="shop-nav">
                    <h2>SHOP //</h2>
                    <ul>
                        <li onClick={(e) => setSearch("", e.target)}>
                            All Products
                        </li>
                        {categories?.map((category) => {
                            return (
                                <li
                                    onClick={() => setSearch(category.id)}
                                    key={category.id}
                                >
                                    {category.name}
                                </li>
                            );
                        })}
                    </ul>
                    <input
                        onChange={(e) => checkSearchInput(e.target.value)}
                        className="search-bar"
                        typeof="text"
                        placeholder="Search"
                    ></input>
                </div>
                <div className="shop-products">
                    {allProducts
                        .filter((item) => item.id.includes(`${searchQuery}`))
                        .map((filteredProduct) => (
                            <Link
                                className="product"
                                key={filteredProduct.id}
                                to={`/the-range/shop/catalog/${filteredProduct.id}`}
                                productid={filteredProduct.id}
                            >
                                <div>
                                    <div className="product-box">
                                        <img
                                            src={require(`../images/${filteredProduct.image}`)}
                                        ></img>
                                    </div>
                                    <div className="product-description">
                                        <h3>{filteredProduct.name}</h3>
                                        <p>{`C$${filteredProduct.price}`}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
