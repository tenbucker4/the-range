import React, { useState } from "react";
import "../styles/Shop.css";
import "../styles/App.css";

const Shop = () => {
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
                <div className="shop-products">Products</div>
            </div>
        </div>
    );
};

export default Shop;
