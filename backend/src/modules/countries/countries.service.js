const axios = require('axios');

/**
 * Service Methods
 */
const countriesUrl = "https://restcountries.com/v3.1/all";


const getPublicCountries = async () => {
  try {
    const response = await axios.get(countriesUrl)
    return { countries: response.data || [] };
  } catch (error) {
    console.error(error);
  }

};



module.exports = {
  getPublicCountries,
};
