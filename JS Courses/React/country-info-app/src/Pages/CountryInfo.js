import React from 'react';
import { useParams } from "react-router-dom";

export default function CountryInfo() {
    const { name } = useParams();

    let country = {};

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => {
        country = data;
    });

    return(
        <h1>hi</h1>
    );
}