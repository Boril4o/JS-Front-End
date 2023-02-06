import React from "react";
import { Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}