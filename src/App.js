import "./styles/App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";
import Shop from "./components/Shop";
import "./styles/Header.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerColor: "white",
            displayCart: false,
            cart: [],
            totalPrice: 0,
            displaySearch: false,
            searchFor: "",
        };
    }

    toggleHeaderColor = (e) => {
        e.preventDefault();

        if (this.state.headerColor == "white") {
            this.setState({ headerColor: "black" });
        }

        console.log(this.state.headerColor);
    };

    render() {
        return (
            <div className="home-page">
                <BrowserRouter>
                    <Header changeColor={this.toggleHeaderColor} />
                    <Routes>
                        <Route exact path="/" element={<TitlePage />} />
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

// IDEAS:

// Use useEffect to make changes (add a state for shop display: true/false and change icon colors following a change in that state property)
// Layout cart hide/display before adding functionality
