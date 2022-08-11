import "./styles/App.css";
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TitlePage from "./components/TitlePage";
import "./styles/Header.css";

class App extends Component {
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

    render() {
        return (
            <div className="home-page">
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<TitlePage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
