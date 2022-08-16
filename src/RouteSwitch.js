import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TitlePage from "./components/TitlePage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";

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
                        </>
                    }
                />
                <Route
                    path="/shop/catalog"
                    element={
                        <>
                            <Header />
                            <Shop />
                        </>
                    }
                />
                <Route
                    path="/shop/catalog/:productid"
                    element={
                        <>
                            <Header />
                            <ProductPage />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
