import React from 'react';
import MainPage from './MainPage';
import Menu from "./components/Menu";
import Login from './Login';
import Form from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {

    return (
        <div style={{'height': '100%'}}>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="sign-up" element={<Form />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;