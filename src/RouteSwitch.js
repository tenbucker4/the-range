import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TitlePage from "./components/TitlePage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { Component } from "react";
import uniqid from "uniqid";

class RouteSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            total: 0,
        };
    }

    // Display cart
    showCart = () => {
        document.querySelector(".cart").style.display = "flex";
        this.calculateTotalPrice();
    };

    // Hide cart
    hideCart = () => {
        document.querySelector(".cart").style.display = "none";
    };

    // Clear cart contents
    clearCart = () => {
        this.setState((prevState) => ({
            ...prevState,
            cart: [],
        }));
    };

    // Add item to cart. Check if item already in cart
    addItemToCart = async (name, image, price, quantity) => {
        for (let i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].name == name) {
                this.setState(({ cart }) => ({
                    cart: [
                        ...cart.slice(0, i),
                        {
                            ...cart[i],
                            quantity:
                                parseInt(this.state.cart[i].quantity) +
                                parseInt(quantity),
                        },
                        ...cart.slice(i + 1),
                    ],
                }));
                this.showCart();
                return;
            }
        }

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

    // Sum total cost in cart
    calculateTotalPrice = async () => {
        let totalPrice = 0;
        await this.state.cart.forEach((item) => {
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;
        });
        await this.setState({ total: totalPrice.toFixed(2) });
    };

    // Add 1 to quantity of cart item
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

    // Subtract 1 from quantity of cart item
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
                        path="/the-range"
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
                                    clearCart={this.clearCart}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/the-range/shop/catalog"
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
                                    clearCart={this.clearCart}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/the-range/shop/catalog/:productId"
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
                                    clearCart={this.clearCart}
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
