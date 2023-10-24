/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicCountries } = require("./countries.service");

const countriesRouter = express.Router();

/**
 * Controller Definitions
 */


countriesRouter.get("/all", async (req, res) => {
  const countries = await getPublicCountries();
  res.status(200).send(countries);
});



module.exports = {
  countriesRouter,
};
