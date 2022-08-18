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
            cart: [],
            total: 0,
            displaySearch: false,
            searchFor: "",
        };
    }

    addItemToCart = (name, image, price, quantity) => {
        const id = uniqid();
        this.setState((prevState) => ({
            ...prevState,
            cart: [
                ...prevState.cart,
                {
                    name: name,
                    image: image,
                    price: price,
                    quantity: quantity,
                    id: id,
                },
            ],
        }));

        document.querySelector(".cart").style.display = "flex";
        this.calculateTotalPrice();
    };

    calculateTotalPrice = () => {
        let totalPrice = 0;
        this.state.cart.forEach((item) => {
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;
        });
        this.setState({ total: totalPrice.toFixed(2) });
    };

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
                                <Header
                                    calculateTotalPrice={
                                        this.calculateTotalPrice
                                    }
                                />
                                <TitlePage />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/shop/catalog"
                        element={
                            <>
                                <Header
                                    calculateTotalPrice={
                                        this.calculateTotalPrice
                                    }
                                />
                                <Shop />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/shop/catalog/:productId"
                        element={
                            <>
                                <Header
                                    calculateTotalPrice={
                                        this.calculateTotalPrice
                                    }
                                />
                                <ProductPage
                                    cart={this.state.cart}
                                    addItemToCart={this.addItemToCart}
                                />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouteSwitch;
