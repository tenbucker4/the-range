import "./styles/App.css";
import RouteSwitch from "./RouteSwitch";
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

    render() {
        return <div className="home-page"></div>;
    }
}

export default App;
