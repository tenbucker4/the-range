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
            cart: [],
            total: 0,
            displaySearch: false,
            searchFor: "",
        };
    }

    showCart = () => {
        document.querySelector(".cart").style.display = "flex";
        this.calculateTotalPrice();
    };

    hideCart = () => {
        document.querySelector(".cart").style.display = "none";
    };

    addItemToCart = async (name, image, price, quantity) => {
        const id = uniqid();
        await this.setState((prevState) => ({
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

        this.calculateTotalPrice();
        document.querySelector(".cart").style.display = "flex";
    };

    calculateTotalPrice = async () => {
        let totalPrice = 0;
        await this.state.cart.forEach((item) => {
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;
        });
        await this.setState({ total: totalPrice.toFixed(2) });
    };

    addCartQuantity = async (i) => {
        await this.setState(({ cart }) => ({
            cart: [
                ...cart.slice(0, i),
                {
                    ...cart[i],
                    quantity:
                        parseInt(this.state.cart[i].quantity) + parseInt(1),
                },
                ...cart.slice(i + 1),
            ],
        }));
        await this.calculateTotalPrice();
    };

    decreaseCartQuantity = async (i, itemQuantity, itemId) => {
        if (itemQuantity == 1) {
            await this.setState({
                cart: this.state.cart.filter(function (item) {
                    return item.id !== itemId;
                }),
            });
            await this.calculateTotalPrice();
        } else {
            await this.setState(({ cart }) => ({
                cart: [
                    ...cart.slice(0, i),
                    {
                        ...cart[i],
                        quantity:
                            parseInt(this.state.cart[i].quantity) - parseInt(1),
                    },
                    ...cart.slice(i + 1),
                ],
            }));
            await this.calculateTotalPrice();
        }
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
                                    showCart={this.showCart}
                                    cart={this.state.cart}
                                />
                                <TitlePage />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                    addCartQuantity={this.addCartQuantity}
                                    decreaseCartQuantity={
                                        this.decreaseCartQuantity
                                    }
                                    hideCart={this.hideCart}
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
                                    showCart={this.showCart}
                                    cart={this.state.cart}
                                />
                                <Shop />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                    addCartQuantity={this.addCartQuantity}
                                    decreaseCartQuantity={
                                        this.decreaseCartQuantity
                                    }
                                    hideCart={this.hideCart}
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
                                    showCart={this.showCart}
                                    cart={this.state.cart}
                                />
                                <ProductPage
                                    cart={this.state.cart}
                                    addItemToCart={this.addItemToCart}
                                />
                                <Cart
                                    cart={this.state.cart}
                                    total={this.state.total}
                                    addCartQuantity={this.addCartQuantity}
                                    decreaseCartQuantity={
                                        this.decreaseCartQuantity
                                    }
                                    hideCart={this.hideCart}
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
