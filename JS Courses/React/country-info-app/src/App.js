import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryInfo from './Pages/CountryInfo';
import Home from './Pages/Home';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Country/:name' element={<CountryInfo/>}/>
            </Routes>
        </>
    );
}