import React from 'react';
import './CountryCard.css';

function CountryCardView(props) {
    const { countryData, handleCountryClick } = props;

    const handleClick = (data) => {
        handleCountryClick(data)
    }

    let name,
        population,
        region,
        capital,
        flags;

    if (countryData) {
        ({ name, population, region, capital, flags } = countryData);
    }
    return (
        <div className="country-card" onClick={() => handleClick(countryData)}>
            <picture className="country-card-picture" style={{ backgroundImage: `url(${flags.url})`}}>
                <img    src={`${flags.svg||"/assets/no-image.png"}`} alt={name.common} />
            </picture>
            <div className="country-card-info">
                <h3 className="country-card-info-name">{name.common}</h3>
                <p className="country-card-info-population"><b>Population</b>: {population} </p>
                <p className="country-card-info-region"><b>Region</b>: {region}</p>
                <p className="country-card-info-capital"><b>Capital</b>: {capital} </p>
            </div>
        </div>
    )
}


export default CountryCardView;