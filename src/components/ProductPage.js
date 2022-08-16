import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import categories from "../products/categories";
import Shop from "./Shop";

const ProductPage = (props) => {
    const { productId } = useParams();
    const product = allProducts.find((product) => product.id === productId);

    return <div>{product.name}</div>;
};

export default ProductPage;
