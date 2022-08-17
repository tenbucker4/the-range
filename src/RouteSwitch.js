import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TitlePage from "./components/TitlePage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

const RouteSwitch = () => {
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
                            <Cart />
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
};

export default RouteSwitch;
