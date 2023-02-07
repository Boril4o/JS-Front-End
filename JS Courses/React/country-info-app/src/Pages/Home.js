import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Css/Home.css';

export default function Home() {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form>
            <input onChange={handleChange} value={name} type='text' id='country-name' placeholder='Search country by name' />
            <button id='submit-button'><Link to={`/country/${name}`}>Submit</Link></button>
        </form>
    );
}