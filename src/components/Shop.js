import React, { Component, useState } from "react";
import "../styles/Shop.css";
import "../styles/App.css";

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: "dark",
        };
    }

    componentDidMount() {
        document.querySelector(".app-title").style.color = "black";
    }

    componentWillUnmount() {
        document.querySelector(".app-title").style.color = "white";
    }

    render() {
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
    }
}

// const Shop = () => {
//     return (
//         <div className="shop-container">
//             <div className="shop-wrapper">
//                 <div className="shop-nav">
//                     <h5>SHOP //</h5>
//                     <h2>All Products</h2>
//                     <ul>
//                         <li>All</li>
//                         <li>Drivers / Woods</li>
//                         <li>Irons</li>
//                         <li>Wedges</li>
//                         <li>Putters</li>
//                         <li>Balls</li>
//                         <li>Gloves</li>
//                     </ul>
//                 </div>
//                 <div className="shop-products">Products</div>
//             </div>
//         </div>
//     );
// };

export default Shop;
