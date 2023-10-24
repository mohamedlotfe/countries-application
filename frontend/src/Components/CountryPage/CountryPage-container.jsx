import React, { Component } from "react";
import CountryPageView from "./CountryPage-view";
import "./CountryPage.css";

class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.extractNamesFromArray = this.extractNamesFromArray.bind(this);
    this.getBorderCountriesNames = this.getBorderCountriesNames.bind(this);
  }

  extractNamesFromArray(array, withComma = false) {
    return (
      array.length &&
      array.map((item) => {
        if (withComma && item !== array[array.length - 1]) {
          return `${item.name.common}, `;
        }
        return `${item.name.common}`;
      })
    );
  }

  getBorderCountriesNames(borderCountriesCodes) {
    const countriesData = this.props.countriesData;
    console.log("borderCountriesCodes", borderCountriesCodes);
    const borderCountries = countriesData.filter((country) =>
      borderCountriesCodes.includes(country.cca3)
    );
    return this.extractNamesFromArray(borderCountries);
  }

  render() {
    const { handleBackButtonClick } = this.props;
    return (
      <div>
        <div className="back-button-container">
          <button onClick={handleBackButtonClick} className="back-button">
            ← Back
          </button>
        </div>
        <CountryPageView
          countryData={this.props.countryData}
          extractNamesFromArray={this.extractNamesFromArray}
          getBorderCountriesNames={this.getBorderCountriesNames}
        />
      </div>
    );
  }
}

export default CountryPage;
