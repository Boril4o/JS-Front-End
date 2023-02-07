import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryInfo from './Pages/CountryInfo';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/country/:name' element={<CountryInfo/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    );
}