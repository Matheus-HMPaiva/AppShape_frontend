import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import HomeWorkout from "../components/HomeWorkout";
import GymWorkout from "../components/GymWorkout";
import IMCCalculator from "../components/IMCCalculator";
import Protected from "../components/Protected";
import Signup from "../components/Signup";

const Rotas = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const logIn = () => {
        setIsLoggedIn(true);
    };

    const logOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Home />
                    </Protected>}
                />
                <Route path="/workout/home" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <HomeWorkout />
                    </Protected>}
                />
                <Route path="/workout/gym" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <GymWorkout />
                    </Protected>}
                />
                <Route path="/imc" element={
                    <Protected>
                        <IMCCalculator />
                    </Protected>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;