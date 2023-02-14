import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import '../Css/CountryInfo.css';

export default function CountryInfo() {
    const { name } = useParams();
   
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => {
            let obj = {
                name: data[0].name.common,
                capital: data[0].capital[0],
                population: data[0].population,
                flag: data[0].flags.png
            };
            setCountry(obj);
        });
    }, [name]);

    console.log(country);

    return(
        <>
        <div id='container'>
        
            {country ? (
                <>
                    <h1>{country.name}</h1>
                    <img src={country.flag} alt='flag'/>
                    <h1>Capital: {country.capital}</h1>
                    <h1>Population: {country.population}</h1>
                </>
                ) : (
                    <p>loading...</p>
                )}
        </div>
        </>
    );
}
