import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import HomeWorkout from "../components/HomeWorkout";
import GymWorkout from "../components/GymWorkout";
import IMCCalculator from "../components/IMCCalculator";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/workout/home" element={<HomeWorkout/>} />
                <Route path="/workout/gym" element={<GymWorkout/>} />
                <Route path="/imc" element={<IMCCalculator/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;