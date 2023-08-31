import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;