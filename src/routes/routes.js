import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import HomeWorkout from "../components/HomeWorkout";
import GymWorkout from "../components/GymWorkout";
import IMCCalculator from "../components/IMCCalculator";
import Protected from "../components/Protected";
import Signup from "../components/Signup";

const Rotas = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verifique se o token está presente no armazenamento local ou nos cookies
        const token = localStorage.getItem("token"); // ou lógica para obter o token de cookies
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const logIn = () => {
        setIsLoggedIn(true);
        // Salve o token no armazenamento local ou nos cookies
        localStorage.setItem("token", "seu_token_aqui"); // ou lógica para definir cookies
    };

    const logOut = () => {
        setIsLoggedIn(false);
        // Remova o token do armazenamento local ou dos cookies
        localStorage.removeItem("token"); // ou lógica para remover cookies
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to={'/home'} />} />
                <Route path="/signup" element={!isLoggedIn ? <Signup setIsLoggedIn={setIsLoggedIn} /> : <Navigate to={'/home'} />} />
                <Route path="/home" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Home setIsLoggedIn={setIsLoggedIn}/>
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
                    <Protected isLoggedIn={isLoggedIn}>
                        <IMCCalculator />
                    </Protected>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;