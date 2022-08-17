import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TitlePage from "./components/TitlePage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { Component, useState } from "react";
import uniqid from "uniqid";

class RouteSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayCart: false,
            cart: [
                {
                    name: "TaylorMade Stealth Driver",
                    image: "taylormade-driver-1.png",
                    price: 749.99,
                    quantity: 1,
                    id: uniqid(),
                },
            ],
            totalPrice: 0,
            displaySearch: false,
            searchFor: "",
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <App />
                                <Header />
                                <TitlePage />
                                <Cart cart={this.state.cart} />
                            </>
                        }
                    />
                    <Route
                        path="/shop/catalog"
                        element={
                            <>
                                <Header />
                                <Shop />
                                <Cart />
                            </>
                        }
                    />
                    <Route
                        path="/shop/catalog/:productId"
                        element={
                            <>
                                <Header />
                                <ProductPage />
                                <Cart />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouteSwitch;
