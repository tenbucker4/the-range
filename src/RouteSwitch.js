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
            totalPrice: 0,
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
        // this.setState((prevState) => ({
        //     ...prevState,
        //     cart: [
        //         ...prevState.cart,
        //         {
        //             name: name,
        //             image: image,
        //             price: price,
        //             quantity: quantity,
        //             id: id,
        //         },
        //     ],
        // }));
        console.log(this.state.cart);
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
                                <Cart cart={this.state.cart} />
                            </>
                        }
                    />
                    <Route
                        path="/shop/catalog/:productId"
                        element={
                            <>
                                <Header />
                                <ProductPage
                                    cart={this.state.cart}
                                    addItemToCart={this.addItemToCart}
                                />
                                <Cart cart={this.state.cart} />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouteSwitch;
